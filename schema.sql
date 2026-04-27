-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  nights INTEGER NOT NULL,
  guests INTEGER NOT NULL,
  pets BOOLEAN DEFAULT false,
  nightly_rate NUMERIC(10, 2) NOT NULL,
  subtotal NUMERIC(10, 2) NOT NULL,
  gst NUMERIC(10, 2) NOT NULL,
  total_amount NUMERIC(10, 2) NOT NULL,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_phone TEXT NOT NULL,
  special_requests TEXT,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'pending',
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT
);

-- Create enquiries table
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  notes TEXT
);

-- Create blocked_dates table
CREATE TABLE blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason TEXT
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- Simple policies for now (Allow all for Service Role, which we use)
-- Note: In a real app, you'd want more granular policies, 
-- but since we use the Service Role key for all backend ops, this is fine.
CREATE POLICY "Allow all for service role" ON bookings FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Allow all for service role" ON enquiries FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Allow all for service role" ON blocked_dates FOR ALL USING (auth.role() = 'service_role');

-- Public access policies for specific operations if needed by anon key
CREATE POLICY "Allow anonymous insertion" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous read" ON blocked_dates FOR SELECT USING (true);
CREATE POLICY "Allow anonymous read" ON bookings FOR SELECT USING (true);
