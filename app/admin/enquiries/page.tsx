"use client";

import { useState, useEffect, useCallback } from "react";

interface Enquiry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  check_in: string | null;
  check_out: string | null;
  guests: number | null;
  status: string;
  admin_notes: string | null;
}

const statusColors: Record<string, string> = {
  new: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  responded: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  closed: "bg-slate-500/15 text-slate-400 border-slate-500/20",
};

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [total, setTotal] = useState(0);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: "50" });
      if (statusFilter !== "all") params.set("status", statusFilter);
      const res = await fetch(`/api/admin/enquiries?${params}`);
      const data = await res.json();
      setEnquiries(data.enquiries || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => { fetchEnquiries(); }, [fetchEnquiries]);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchEnquiries();
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#F0F2ED]">Enquiries</h1>
          <p className="text-[#6E8268] text-sm mt-1">{total} total enquir{total !== 1 ? "ies" : "y"}</p>
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2.5 bg-[#1a1f1a] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]">
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="responded">Responded</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div className="space-y-3">
        {loading ? (
          <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-12 text-center text-[#6E8268]">Loading...</div>
        ) : enquiries.length === 0 ? (
          <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-12 text-center text-[#6E8268]">No enquiries found</div>
        ) : (
          enquiries.map((e) => (
            <div key={e.id} className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-5 hover:border-[#394735] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[#F0F2ED] font-medium">{e.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[e.status]}`}>{e.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8A987D]">
                    <span>{e.email}</span>
                    {e.phone && <span>{e.phone}</span>}
                    <span className="text-[#4F6149]">{formatDate(e.created_at)}</span>
                  </div>
                  {(e.check_in || e.guests) && (
                    <div className="flex gap-4 text-xs text-[#6E8268]">
                      {e.check_in && <span>Check-in: {e.check_in}</span>}
                      {e.check_out && <span>Check-out: {e.check_out}</span>}
                      {e.guests && <span>{e.guests} guests</span>}
                    </div>
                  )}
                  {e.message && <p className="text-[#8A987D] text-sm bg-[#222822] rounded-lg p-3 border border-[#2a332a]">{e.message}</p>}
                </div>
                <div className="flex gap-2">
                  <a href={`mailto:${e.email}`} className="px-3 py-1.5 bg-[#222822] border border-[#2a332a] rounded-lg text-[#8A987D] text-xs hover:border-[#394735] transition-colors">Reply</a>
                  <select value={e.status} onChange={(ev) => updateStatus(e.id, ev.target.value)} className="px-3 py-1.5 bg-[#222822] border border-[#2a332a] rounded-lg text-[#8A987D] text-xs focus:outline-none focus:border-[#394735]">
                    <option value="new">New</option>
                    <option value="responded">Responded</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
