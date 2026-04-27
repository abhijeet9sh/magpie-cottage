-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- 1. Hardened Data Validation for Bookings
ALTER TABLE bookings 
ADD CONSTRAINT check_stay_duration 
CHECK (check_out > check_in);

-- 2. Prevent overlapping bookings for confirmed/pending stays
-- This ensures no two bookings can occupy the same date range
ALTER TABLE bookings 
ADD CONSTRAINT exclude_overlapping_bookings 
EXCLUDE USING gist (daterange(check_in, check_out) WITH &&) 
WHERE (status != 'cancelled');

-- 3. Audit Logging / Change Tracking
CREATE TABLE IF NOT EXISTS booking_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  changed_at TIMESTAMPTZ DEFAULT now(),
  old_status TEXT,
  new_status TEXT,
  changed_by TEXT DEFAULT 'system',
  change_details JSONB
);

-- Trigger function to log status changes
CREATE OR REPLACE FUNCTION log_booking_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF (OLD.status IS DISTINCT FROM NEW.status) OR (OLD.payment_status IS DISTINCT FROM NEW.payment_status) THEN
    INSERT INTO booking_history (booking_id, old_status, new_status, change_details)
    VALUES (
      NEW.id, 
      OLD.status, 
      NEW.status, 
      jsonb_build_object(
        'old_payment_status', OLD.payment_status,
        'new_payment_status', NEW.payment_status
      )
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_log_booking_status_change
AFTER UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION log_booking_status_change();

-- 4. Performance Indexing
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings (check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_status_payment ON bookings (status, payment_status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries (status);

-- 5. Auto-Cancellation for Abandoned Payments (after 30 mins)
CREATE OR REPLACE FUNCTION cancel_expired_bookings()
RETURNS void AS $$
BEGIN
  UPDATE bookings
  SET status = 'cancelled',
      special_requests = COALESCE(special_requests, '') || ' [Auto-cancelled due to payment timeout]'
  WHERE status = 'pending'
    AND payment_status = 'pending'
    AND created_at < (now() - interval '30 minutes');
END;
$$ LANGUAGE plpgsql;

-- Note: Scheduling requires pg_cron enabled in Supabase portal.
-- The following command is a typical way to schedule if pg_cron is enabled.
-- SELECT cron.schedule('*/10 * * * *', 'SELECT cancel_expired_bookings();');
