import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// GET /api/availability — Public endpoint for booking page date picker
export async function GET() {
  try {
    const supabase = createAdminClient();
    const today = new Date().toISOString().split("T")[0];

    // Get blocked dates
    const { data: blockedDates } = await supabase
      .from("blocked_dates")
      .select("start_date, end_date")
      .gte("end_date", today);

    // Get confirmed/checked-in bookings
    const { data: bookedDates } = await supabase
      .from("bookings")
      .select("check_in, check_out")
      .in("status", ["confirmed", "checked_in"])
      .gte("check_out", today);

    // Build list of unavailable date ranges
    const unavailableDates = [
      ...(blockedDates || []).map((d: any) => ({
        from: d.start_date,
        to: d.end_date,
        type: "blocked" as const,
      })),
      ...(bookedDates || []).map((d: any) => ({
        from: d.check_in,
        to: d.check_out,
        type: "booked" as const,
      })),
    ];

    return NextResponse.json({ unavailableDates });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json({ unavailableDates: [] });
  }
}
