"use client";

import { useState, useEffect, useCallback } from "react";
import { format, eachDayOfInterval, parseISO, isWithinInterval, startOfDay } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

interface BlockedDate {
    id: string;
    start_date: string;
    end_date: string;
    reason: string;
    created_at: string;
}

interface Booking {
    id: string;
    guest_name: string;
    check_in: string;
    check_out: string;
    status: string;
}

export default function AdminCalendarPage() {
    const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
    const [reason, setReason] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [blockedRes, bookingsRes] = await Promise.all([
                fetch("/api/admin/blocked-dates"),
                fetch("/api/admin/bookings?limit=100") // Get a decent range of bookings
            ]);

            const blockedData = await blockedRes.json();
            const bookingsData = await bookingsRes.json();

            setBlockedDates(blockedData.blockedDates || []);
            setBookings(bookingsData.bookings || []);
        } catch (error) {
            console.error("Error fetching calendar data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleBlockDates = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedRange?.from || !selectedRange?.to) return;

        setSubmitting(true);
        try {
            const res = await fetch("/api/admin/blocked-dates", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    start_date: format(selectedRange.from, "yyyy-MM-dd"),
                    end_date: format(selectedRange.to, "yyyy-MM-dd"),
                    reason,
                }),
            });

            if (res.ok) {
                setReason("");
                setSelectedRange(undefined);
                fetchData();
            }
        } catch (error) {
            console.error("Error blocking dates:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const deleteBlockedDate = async (id: string) => {
        if (!confirm("Are you sure you want to unblock these dates?")) return;

        try {
            const res = await fetch(`/api/admin/blocked-dates?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                fetchData();
            }
        } catch (error) {
            console.error("Error deleting blocked date:", error);
        }
    };

    // Prepare modifiers for the calendar
    const bookedDays: Date[] = [];
    bookings.forEach((b) => {
        if (b.status !== "cancelled") {
            try {
                const interval = eachDayOfInterval({
                    start: parseISO(b.check_in),
                    end: parseISO(b.check_out),
                });
                bookedDays.push(...interval);
            } catch (e) { }
        }
    });

    const blockedDays: Date[] = [];
    blockedDates.forEach((d) => {
        try {
            const interval = eachDayOfInterval({
                start: parseISO(d.start_date),
                end: parseISO(d.end_date),
            });
            blockedDays.push(...interval);
        } catch (e) { }
    });

    const modifiers = {
        booked: bookedDays,
        blocked: blockedDays,
    };

    const modifiersStyles = {
        booked: { backgroundColor: "#394735", color: "white" },
        blocked: { backgroundColor: "#8A987D", color: "white" },
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold text-[#F0F2ED]">Calendar</h1>
                <p className="text-[#6E8268] text-sm mt-1">Manage property availability and blocked dates.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Calendar View */}
                <div className="xl:col-span-8 bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
                    <div className="flex justify-center">
                        <DayPicker
                            mode="range"
                            selected={selectedRange}
                            onSelect={setSelectedRange}
                            modifiers={modifiers}
                            modifiersStyles={modifiersStyles}
                            numberOfMonths={2}
                            className="admin-calendar"
                        />
                    </div>

                    <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm border-t border-[#2a332a] pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "#394735" }} />
                            <span className="text-[#8A987D]">Confirmed Bookings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "#8A987D" }} />
                            <span className="text-[#8A987D]">Manual Blocks</span>
                        </div>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="xl:col-span-4 space-y-6">
                    {/* Block Selection Form */}
                    <div className="bg-[#1a1f1a] rounded-2xl p-6 border border-[#2a332a]">
                        <h2 className="text-[#F0F2ED] font-medium mb-4">Block Dates</h2>
                        <form onSubmit={handleBlockDates} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-[#6E8268] uppercase tracking-wider mb-1.5">Selected Range</label>
                                <div className="px-4 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm h-10 flex items-center">
                                    {selectedRange?.from ? (
                                        <>
                                            {format(selectedRange.from, "MMM dd")}
                                            {selectedRange.to ? ` — ${format(selectedRange.to, "MMM dd, yyyy")}` : " — Pick end date"}
                                        </>
                                    ) : (
                                        <span className="text-[#4F6149] italic">Select dates on calendar</span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#6E8268] uppercase tracking-wider mb-1.5">Reason / Note</label>
                                <input
                                    type="text"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="e.g. Maintenance, Personal Use"
                                    className="w-full px-4 py-2.5 bg-[#1a1f1a] border border-[#2a332a] rounded-xl text-[#F0F2ED] placeholder-[#4F6149] text-sm focus:outline-none focus:border-[#394735] transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!selectedRange?.from || !selectedRange?.to || submitting}
                                className="w-full py-3 bg-[#394735] text-[#F0F2ED] rounded-xl text-sm font-medium hover:bg-[#4F6149] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#394735]/10"
                            >
                                {submitting ? "Processing..." : "Block Selected Dates"}
                            </button>
                        </form>
                    </div>

                    {/* Current Blocks List */}
                    <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] overflow-hidden">
                        <div className="px-6 py-4 border-b border-[#2a332a]">
                            <h2 className="text-[#F0F2ED] font-medium">Currently Blocked</h2>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {blockedDates.length === 0 ? (
                                <p className="p-8 text-center text-[#6E8268] text-sm">No manual blocks active</p>
                            ) : (
                                <div className="divide-y divide-[#2a332a]/50">
                                    {blockedDates.map((block) => (
                                        <div key={block.id} className="p-4 hover:bg-[#222822] transition-colors group">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[#F0F2ED] text-sm font-medium">
                                                        {format(parseISO(block.start_date), "MMM dd")} — {format(parseISO(block.end_date), "MMM dd, yyyy")}
                                                    </p>
                                                    {block.reason && <p className="text-[#8A987D] text-xs mt-0.5">{block.reason}</p>}
                                                </div>
                                                <button
                                                    onClick={() => deleteBlockedDate(block.id)}
                                                    className="opacity-0 group-hover:opacity-100 p-1.5 text-[#6E8268] hover:text-red-400 transition-all"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .admin-calendar {
          --rdp-cell-size: 45px;
          --rdp-accent-color: #394735;
          --rdp-background-color: #222822;
          color: #F0F2ED;
        }
        .admin-calendar .rdp-day_selected, .admin-calendar .rdp-day_selected:focus-visible, .admin-calendar .rdp-day_selected:hover {
          background-color: #394735;
          border-radius: 8px;
        }
        .admin-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: #222822;
        }
        .admin-calendar .rdp-day_today {
          color: #A3AF99;
          font-weight: bold;
          border: 1px solid #394735;
          border-radius: 8px;
        }
      `}</style>
        </div>
    );
}
