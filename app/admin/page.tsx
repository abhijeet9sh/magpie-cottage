"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Stats {
  revenue: {
    total: number;
    month: number;
    week: number;
  };
  totalBookings: number;
  upcomingCheckins: Array<{
    id: string;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in: string;
    check_out: string;
    guests: number;
    nights: number;
    total_amount: number;
    status: string;
  }>;
  recentBookings: Array<{
    id: string;
    guest_name: string;
    guest_email: string;
    check_in: string;
    check_out: string;
    total_amount: number;
    status: string;
    payment_status: string;
    created_at: string;
  }>;
  newEnquiries: number;
  avgStayNights: number;
}

const statusColors: Record<string, string> = {
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  confirmed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  checked_in: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  checked_out: "bg-slate-500/15 text-slate-400 border-slate-500/20",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/20",
  refunded: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        statusColors[status] || "bg-slate-500/15 text-slate-400 border-slate-500/20"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a] animate-pulse">
              <div className="h-4 bg-[#2a332a] rounded w-24 mb-4" />
              <div className="h-8 bg-[#2a332a] rounded w-32" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#F0F2ED]">Dashboard</h1>
        <p className="text-[#6E8268] text-sm mt-1">
          Welcome back. Here&apos;s what&apos;s happening at Magpie Cottage.
        </p>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#394735] to-[#2a352a] rounded-2xl p-6 border border-[#4F6149]/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#A3AF99] text-sm">Total Revenue</span>
            <div className="w-10 h-10 rounded-xl bg-[#4F6149]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#A3AF99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#F0F2ED]">
            {formatCurrency(stats?.revenue.total || 0)}
          </p>
          <p className="text-xs text-[#6E8268] mt-1">All time</p>
        </div>

        <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#8A987D] text-sm">This Month</span>
            <div className="w-10 h-10 rounded-xl bg-[#222822] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#F0F2ED]">
            {formatCurrency(stats?.revenue.month || 0)}
          </p>
          <p className="text-xs text-[#6E8268] mt-1">Revenue this month</p>
        </div>

        <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#8A987D] text-sm">Total Bookings</span>
            <div className="w-10 h-10 rounded-xl bg-[#222822] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#F0F2ED]">
            {stats?.totalBookings || 0}
          </p>
          <p className="text-xs text-[#6E8268] mt-1">Confirmed bookings</p>
        </div>

        <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#8A987D] text-sm">Avg. Stay</span>
            <div className="w-10 h-10 rounded-xl bg-[#222822] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#F0F2ED]">
            {stats?.avgStayNights || 0}
            <span className="text-lg text-[#6E8268] ml-1">nights</span>
          </p>
          <p className="text-xs text-[#6E8268] mt-1">Average duration</p>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Upcoming Check-ins */}
        <div className="xl:col-span-1 bg-[#1a1f1a] rounded-2xl border border-[#2a332a] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2a332a] flex items-center justify-between">
            <h2 className="text-[#F0F2ED] font-medium">Upcoming Check-ins</h2>
            <span className="bg-emerald-500/15 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Next 7 days
            </span>
          </div>
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {stats?.upcomingCheckins.length === 0 && (
              <p className="text-[#6E8268] text-sm text-center py-8">
                No upcoming check-ins
              </p>
            )}
            {stats?.upcomingCheckins.map((booking) => (
              <div
                key={booking.id}
                className="bg-[#222822] rounded-xl p-4 border border-[#2a332a] hover:border-[#394735] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[#F0F2ED] font-medium text-sm">
                    {booking.guest_name}
                  </p>
                  <span className="text-[#6E8268] text-xs">
                    {booking.guests} guest{booking.guests > 1 ? "s" : ""}
                  </span>
                </div>
                <p className="text-[#8A987D] text-xs">
                  {formatDate(booking.check_in)} → {formatDate(booking.check_out)}
                </p>
                <p className="text-[#A3AF99] text-xs mt-1 font-medium">
                  {booking.nights} night{booking.nights > 1 ? "s" : ""} ·{" "}
                  {formatCurrency(booking.total_amount)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="xl:col-span-2 bg-[#1a1f1a] rounded-2xl border border-[#2a332a] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2a332a] flex items-center justify-between">
            <h2 className="text-[#F0F2ED] font-medium">Recent Bookings</h2>
            <Link
              href="/admin/bookings"
              className="text-[#6E8268] text-xs hover:text-[#A3AF99] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a332a]">
                  <th className="text-left text-xs font-medium text-[#6E8268] px-6 py-3 uppercase tracking-wider">
                    Guest
                  </th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats?.recentBookings.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-[#6E8268] py-12 text-sm">
                      No bookings yet
                    </td>
                  </tr>
                )}
                {stats?.recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-[#2a332a]/50 hover:bg-[#222822] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="text-[#F0F2ED] text-sm font-medium">
                        {booking.guest_name}
                      </p>
                      <p className="text-[#6E8268] text-xs">{booking.guest_email}</p>
                    </td>
                    <td className="px-4 py-4 text-[#8A987D] text-sm">
                      {formatDate(booking.check_in)} → {formatDate(booking.check_out)}
                    </td>
                    <td className="px-4 py-4 text-[#A3AF99] text-sm font-medium">
                      {formatCurrency(booking.total_amount)}
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions + Enquiries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
          <h2 className="text-[#F0F2ED] font-medium mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/admin/calendar"
              className="flex flex-col items-center gap-2 p-4 bg-[#222822] rounded-xl border border-[#2a332a] hover:border-[#394735] transition-colors text-center"
            >
              <svg className="w-6 h-6 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span className="text-[#8A987D] text-xs">Block Dates</span>
            </Link>
            <Link
              href="/admin/bookings"
              className="flex flex-col items-center gap-2 p-4 bg-[#222822] rounded-xl border border-[#2a332a] hover:border-[#394735] transition-colors text-center"
            >
              <svg className="w-6 h-6 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="text-[#8A987D] text-xs">All Bookings</span>
            </Link>
            <Link
              href="/admin/enquiries"
              className="flex flex-col items-center gap-2 p-4 bg-[#222822] rounded-xl border border-[#2a332a] hover:border-[#394735] transition-colors text-center relative"
            >
              <svg className="w-6 h-6 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-[#8A987D] text-xs">Enquiries</span>
              {(stats?.newEnquiries || 0) > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {stats?.newEnquiries}
                </span>
              )}
            </Link>
            <Link
              href="/admin/settings"
              className="flex flex-col items-center gap-2 p-4 bg-[#222822] rounded-xl border border-[#2a332a] hover:border-[#394735] transition-colors text-center"
            >
              <svg className="w-6 h-6 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#8A987D] text-xs">Settings</span>
            </Link>
          </div>
        </div>

        <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#F0F2ED] font-medium">Quick Stats</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#2a332a]">
              <span className="text-[#8A987D] text-sm">This week&apos;s revenue</span>
              <span className="text-[#F0F2ED] font-medium">{formatCurrency(stats?.revenue.week || 0)}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#2a332a]">
              <span className="text-[#8A987D] text-sm">Pending enquiries</span>
              <span className="text-amber-400 font-medium">{stats?.newEnquiries || 0}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#2a332a]">
              <span className="text-[#8A987D] text-sm">Upcoming check-ins</span>
              <span className="text-emerald-400 font-medium">{stats?.upcomingCheckins.length || 0}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#8A987D] text-sm">Average stay</span>
              <span className="text-[#F0F2ED] font-medium">{stats?.avgStayNights || 0} nights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
