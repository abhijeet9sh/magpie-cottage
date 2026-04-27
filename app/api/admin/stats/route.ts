import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// GET /api/admin/stats — Dashboard statistics
export async function GET() {
  try {
    const supabase = createAdminClient();
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    
    // Start of week (Monday)
    const dayOfWeek = now.getDay();
    const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - mondayOffset);
    const weekStartStr = weekStart.toISOString().split("T")[0];
    
    // Start of month
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthStartStr = monthStart.toISOString().split("T")[0];

    // Total revenue (all time, confirmed/paid bookings)
    const { data: totalRevData } = await supabase
      .from("bookings")
      .select("total_amount")
      .eq("payment_status", "paid");

    const totalRevenue = (totalRevData || []).reduce(
      (sum: number, b: any) => sum + Number(b.total_amount),
      0
    );

    // This month's revenue
    const { data: monthRevData } = await supabase
      .from("bookings")
      .select("total_amount")
      .eq("payment_status", "paid")
      .gte("created_at", monthStartStr);

    const monthRevenue = (monthRevData || []).reduce(
      (sum: number, b: any) => sum + Number(b.total_amount),
      0
    );

    // This week's revenue
    const { data: weekRevData } = await supabase
      .from("bookings")
      .select("total_amount")
      .eq("payment_status", "paid")
      .gte("created_at", weekStartStr);

    const weekRevenue = (weekRevData || []).reduce(
      (sum: number, b: any) => sum + Number(b.total_amount),
      0
    );

    // Total bookings count
    const { count: totalBookings } = await supabase
      .from("bookings")
      .select("*", { count: "exact", head: true })
      .eq("payment_status", "paid");

    // Upcoming check-ins (next 7 days)
    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + 7);
    const nextWeekStr = nextWeek.toISOString().split("T")[0];

    const { data: upcomingCheckins } = await supabase
      .from("bookings")
      .select("*")
      .gte("check_in", todayStr)
      .lte("check_in", nextWeekStr)
      .in("status", ["confirmed"])
      .order("check_in", { ascending: true });

    // Recent bookings (last 10)
    const { data: recentBookings } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    // New enquiries count
    const { count: newEnquiries } = await supabase
      .from("enquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", "new");

    // Average stay duration
    const { data: avgStayData } = await supabase
      .from("bookings")
      .select("nights")
      .eq("payment_status", "paid");

    const avgStay =
      avgStayData && avgStayData.length > 0
        ? (
            avgStayData.reduce((sum: number, b: any) => sum + Number(b.nights), 0) /
            avgStayData.length
          ).toFixed(1)
        : "0";

    return NextResponse.json({
      revenue: {
        total: totalRevenue,
        month: monthRevenue,
        week: weekRevenue,
      },
      totalBookings: totalBookings || 0,
      upcomingCheckins: upcomingCheckins || [],
      recentBookings: recentBookings || [],
      newEnquiries: newEnquiries || 0,
      avgStayNights: parseFloat(avgStay),
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
