"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#F0F2ED]">Settings</h1>
        <p className="text-[#6E8268] text-sm mt-1">Configure cottage and booking settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pricing */}
        <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-6 space-y-4">
          <h2 className="text-[#F0F2ED] font-medium">Pricing</h2>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">Nightly Rate (₹)</label>
            <input type="number" defaultValue={12000} className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">GST Rate (%)</label>
            <input type="number" defaultValue={18} className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
          <p className="text-[#4F6149] text-xs">Note: Pricing changes are currently managed in the codebase (BookingPage.tsx). This UI is for future dynamic pricing support.</p>
        </div>

        {/* Property */}
        <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-6 space-y-4">
          <h2 className="text-[#F0F2ED] font-medium">Property Details</h2>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">Max Guests</label>
            <input type="number" defaultValue={8} className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked id="pets-allowed" className="w-4 h-4 rounded border-[#2a332a] accent-[#394735]" />
            <label htmlFor="pets-allowed" className="text-[#8A987D] text-sm">Pets Allowed</label>
          </div>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">Bedrooms</label>
            <input type="number" defaultValue={3} className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-6 space-y-4">
          <h2 className="text-[#F0F2ED] font-medium">Contact Info</h2>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">Admin Email</label>
            <input type="email" defaultValue="bookmagpiecottage@gmail.com" className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
          <div>
            <label className="block text-[#8A987D] text-sm mb-1">WhatsApp Number</label>
            <input type="text" defaultValue="+91 98119 34909" className="w-full px-3 py-2.5 bg-[#222822] border border-[#2a332a] rounded-xl text-[#F0F2ED] text-sm focus:outline-none focus:border-[#394735]" />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-6 space-y-4">
          <h2 className="text-[#F0F2ED] font-medium">Notifications</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#8A987D] text-sm">New booking notification</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-[#394735]" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8A987D] text-sm">New enquiry notification</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-[#394735]" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8A987D] text-sm">Check-in reminder (1 day before)</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-[#394735]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1f1a] rounded-2xl border border-[#2a332a] p-6">
        <h2 className="text-[#F0F2ED] font-medium mb-3">Service Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-[#222822] rounded-xl p-4 border border-[#2a332a]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-[#F0F2ED] text-sm font-medium">Supabase</p>
              <p className="text-[#6E8268] text-xs">Connected</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#222822] rounded-xl p-4 border border-[#2a332a]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-[#F0F2ED] text-sm font-medium">Razorpay</p>
              <p className="text-[#6E8268] text-xs">Test Mode</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#222822] rounded-xl p-4 border border-[#2a332a]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-[#F0F2ED] text-sm font-medium">Resend</p>
              <p className="text-[#6E8268] text-xs">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
