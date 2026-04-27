"use client";

import { useState, useEffect, useCallback } from "react";

interface Booking {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  check_in: string;
  check_out: string;
  nights: number;
  guests: number;
  pets: boolean;
  nightly_rate: number;
  subtotal: number;
  gst: number;
  total_amount: number;
  special_requests: string | null;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  payment_status: string;
  notes: string | null;
}

const statusColors: Record<string, string> = {
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  confirmed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  checked_in: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  checked_out: "bg-slate-500/15 text-slate-400 border-slate-500/20",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/20",
  refunded: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

const paymentColors: Record<string, string> = {
  pending: "text-amber-400",
  paid: "text-emerald-400",
  refunded: "text-purple-400",
  failed: "text-red-400",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[status] || "bg-slate-500/15 text-slate-400 border-slate-500/20"}`}>
      {status.replace("_", " ")}
    </span>
  );
}

function formatCurrency(amount: number) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function formatDateTime(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notesValue, setNotesValue] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: page.toString(), limit: "15" });
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (search) params.set("search", search);

      const res = await fetch(`/api/admin/bookings?${params}`);
      const data = await res.json();
      setBookings(data.bookings || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, search]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchBookings();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const saveNotes = async (id: string) => {
    try {
      await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, notes: notesValue }),
      });
      setEditingNotes(null);
      fetchBookings();
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#F0F2ED]">Bookings</h1>
          <p className="text-[#6E8268] text-sm mt-1">{total} total booking{total !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E8268]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, email, phone, or order ID..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2.5 bg-[#1a1f1a] border border-[#2a332a] rounded-xl text-[#F0F2ED] placeholder-[#4F6149] text-sm focus:outline-none focus:border-[#394735] transition-colors"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
          className="px-4 py-2.5 bg-[#1a1f1a] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735] transition-colors"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="checked_in">Checked In</option>
          <option value="checked_out">Checked Out</option>
          <option value="cancelled">Cancelled</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-[#6E8268]">
            <svg className="animate-spin h-6 w-6 mx-auto mb-3 text-[#394735]" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
            </svg>
            Loading bookings...
          </div>
        ) : bookings.length === 0 ? (
          <div className="p-12 text-center text-[#6E8268]">No bookings found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a332a]">
                  <th className="text-left text-xs font-medium text-[#6E8268] px-6 py-3 uppercase tracking-wider">Guest</th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">Dates</th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">Amount</th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">Payment</th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">Status</th>
                  <th className="text-left text-xs font-medium text-[#6E8268] px-4 py-3 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <>
                    <tr
                      key={b.id}
                      onClick={() => setExpandedId(expandedId === b.id ? null : b.id)}
                      className="border-b border-[#2a332a]/50 hover:bg-[#222822] transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <p className="text-[#F0F2ED] text-sm font-medium">{b.guest_name}</p>
                        <p className="text-[#6E8268] text-xs">{b.guest_email}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#8A987D] text-sm">{formatDate(b.check_in)}</p>
                        <p className="text-[#6E8268] text-xs">→ {formatDate(b.check_out)}</p>
                      </td>
                      <td className="px-4 py-4 text-[#A3AF99] text-sm font-medium">{formatCurrency(b.total_amount)}</td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-medium ${paymentColors[b.payment_status] || "text-slate-400"}`}>
                          {b.payment_status}
                        </span>
                      </td>
                      <td className="px-4 py-4"><StatusBadge status={b.status} /></td>
                      <td className="px-4 py-4">
                        <svg className={`w-4 h-4 text-[#6E8268] transition-transform ${expandedId === b.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </td>
                    </tr>
                    {expandedId === b.id && (
                      <tr key={`${b.id}-detail`}>
                        <td colSpan={6} className="bg-[#222822] px-6 py-5">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Guest Details */}
                            <div className="space-y-3">
                              <h4 className="text-[#A3AF99] text-xs font-medium uppercase tracking-wider">Guest Details</h4>
                              <div className="space-y-1 text-sm">
                                <p className="text-[#F0F2ED]">{b.guest_name}</p>
                                <p className="text-[#8A987D]">{b.guest_email}</p>
                                <p className="text-[#8A987D]">{b.guest_phone}</p>
                                <p className="text-[#6E8268]">{b.guests} guest{b.guests > 1 ? "s" : ""}{b.pets ? " + pets" : ""}</p>
                              </div>
                              {b.special_requests && (
                                <div>
                                  <p className="text-[#6E8268] text-xs mb-1">Special Requests:</p>
                                  <p className="text-[#8A987D] text-sm bg-[#1a1f1a] rounded-lg p-3 border border-[#2a332a]">{b.special_requests}</p>
                                </div>
                              )}
                            </div>

                            {/* Payment Details */}
                            <div className="space-y-3">
                              <h4 className="text-[#A3AF99] text-xs font-medium uppercase tracking-wider">Payment</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between"><span className="text-[#6E8268]">Nightly Rate</span><span className="text-[#8A987D]">{formatCurrency(b.nightly_rate)}</span></div>
                                <div className="flex justify-between"><span className="text-[#6E8268]">Nights</span><span className="text-[#8A987D]">{b.nights}</span></div>
                                <div className="flex justify-between"><span className="text-[#6E8268]">Subtotal</span><span className="text-[#8A987D]">{formatCurrency(b.subtotal)}</span></div>
                                <div className="flex justify-between"><span className="text-[#6E8268]">GST (18%)</span><span className="text-[#8A987D]">{formatCurrency(b.gst)}</span></div>
                                <div className="flex justify-between border-t border-[#2a332a] pt-2"><span className="text-[#A3AF99] font-medium">Total</span><span className="text-[#F0F2ED] font-medium">{formatCurrency(b.total_amount)}</span></div>
                              </div>
                              {b.razorpay_order_id && (
                                <div className="text-xs text-[#4F6149] mt-2 space-y-1">
                                  <p>Order: {b.razorpay_order_id}</p>
                                  {b.razorpay_payment_id && <p>Payment: {b.razorpay_payment_id}</p>}
                                </div>
                              )}
                              <p className="text-xs text-[#4F6149]">Booked: {formatDateTime(b.created_at)}</p>
                            </div>

                            {/* Actions */}
                            <div className="space-y-3">
                              <h4 className="text-[#A3AF99] text-xs font-medium uppercase tracking-wider">Actions</h4>
                              <div className="space-y-2">
                                <select
                                  value={b.status}
                                  onChange={(e) => updateStatus(b.id, e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1a1f1a] border border-[#2a332a] rounded-lg text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="confirmed">Confirmed</option>
                                  <option value="checked_in">Checked In</option>
                                  <option value="checked_out">Checked Out</option>
                                  <option value="cancelled">Cancelled</option>
                                  <option value="refunded">Refunded</option>
                                </select>
                              </div>

                              {/* Admin Notes */}
                              <div>
                                <p className="text-[#6E8268] text-xs mb-2">Admin Notes</p>
                                {editingNotes === b.id ? (
                                  <div className="space-y-2">
                                    <textarea
                                      value={notesValue}
                                      onChange={(e) => setNotesValue(e.target.value)}
                                      rows={3}
                                      className="w-full px-3 py-2 bg-[#1a1f1a] border border-[#2a332a] rounded-lg text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735] resize-none"
                                      placeholder="Add notes..."
                                    />
                                    <div className="flex gap-2">
                                      <button onClick={() => saveNotes(b.id)} className="px-3 py-1.5 bg-[#394735] text-[#F0F2ED] rounded-lg text-xs hover:bg-[#4F6149] transition-colors">Save</button>
                                      <button onClick={() => setEditingNotes(null)} className="px-3 py-1.5 border border-[#2a332a] text-[#8A987D] rounded-lg text-xs hover:bg-[#1a1f1a] transition-colors">Cancel</button>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => { setEditingNotes(b.id); setNotesValue(b.notes || ""); }}
                                    className="px-3 py-2 bg-[#1a1f1a] border border-[#2a332a] rounded-lg text-sm text-[#8A987D] cursor-pointer hover:border-[#394735] transition-colors min-h-[60px]"
                                  >
                                    {b.notes || <span className="text-[#4F6149] italic">Click to add notes...</span>}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#2a332a]">
            <p className="text-[#6E8268] text-sm">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 bg-[#222822] border border-[#2a332a] rounded-lg text-[#8A987D] text-sm disabled:opacity-50 hover:border-[#394735] transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 bg-[#222822] border border-[#2a332a] rounded-lg text-[#8A987D] text-sm disabled:opacity-50 hover:border-[#394735] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
