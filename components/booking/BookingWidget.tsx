"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

export function BookingWidget() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [minDate, setMinDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  const handleBooking = () => {
    const params = new URLSearchParams();
    if (dateRange?.from) params.set("checkIn", format(dateRange.from, "yyyy-MM-dd"));
    if (dateRange?.to) params.set("checkOut", format(dateRange.to, "yyyy-MM-dd"));
    params.set("guests", guests.toString());
    
    router.push(`/book?${params.toString()}`);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth > 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2rem] md:rounded-full py-3 px-6 md:py-3 md:px-4 mt-16 md:mt-24 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 relative z-20 shadow-2xl shadow-black/10">
      
      {/* Dates Section */}
      <div className="flex w-full md:w-[60%] flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
        <button 
          onClick={() => { setShowCalendar(!showCalendar); setShowGuests(false); }}
          className="flex flex-col items-start md:px-6 w-full md:w-auto flex-1 text-left group"
        >
          <span className="text-[10px] md:text-[11px] text-[#6b7280] font-semibold uppercase tracking-[0.08em] mb-1 group-hover:text-forest transition-colors">Check In</span>
          <span className="text-[#374151] font-medium text-[15px] md:text-[16px]">
            {dateRange?.from ? format(dateRange.from, "MMM dd, yyyy") : "Add dates"}
          </span>
        </button>

        <div className="w-full h-px md:w-px md:h-10 bg-stone-300/70 shrink-0"></div>

        <button 
          onClick={() => { setShowCalendar(!showCalendar); setShowGuests(false); }}
          className="flex flex-col items-start md:px-6 w-full md:w-auto flex-1 text-left group"
        >
          <span className="text-[10px] md:text-[11px] text-[#6b7280] font-semibold uppercase tracking-[0.08em] mb-1 group-hover:text-forest transition-colors">Check Out</span>
          <span className="text-[#374151] font-medium text-[15px] md:text-[16px]">
            {dateRange?.to ? format(dateRange.to, "MMM dd, yyyy") : "Add dates"}
          </span>
        </button>
      </div>

      <div className="w-full h-px md:w-px md:h-10 bg-stone-300/70 shrink-0"></div>

      {/* Guests Section */}
      <div className="relative w-full md:w-[40%] flex justify-between items-center md:pl-6 md:pr-2 group">
        <button 
          onClick={() => { setShowGuests(!showGuests); setShowCalendar(false); }}
          className="flex flex-col items-start text-left flex-1"
        >
          <span className="text-[10px] md:text-[11px] text-[#6b7280] font-semibold uppercase tracking-[0.08em] mb-1 group-hover:text-forest transition-colors">Guests</span>
          <span className="text-[#374151] font-medium text-[15px] md:text-[16px]">
            {guests} {guests === 1 ? "Guest" : "Guests"}
          </span>
        </button>

        {/* CTA Button */}
        <button 
          onClick={handleBooking}
          className="w-12 h-12 md:w-[52px] md:h-[52px] bg-[#334b35] text-white rounded-full flex items-center justify-center hover:bg-[#203625] hover:scale-105 transition-all duration-300 shadow-md ml-4 shrink-0"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Popovers */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[110%] left-0 mt-2 p-4 bg-white rounded-3xl shadow-2xl border border-stone-100 text-forest z-50 overflow-hidden w-full md:w-auto md:min-w-[600px] flex justify-center"
          >
            <DayPicker
              mode="range"
              selected={dateRange}
              onSelect={(range) => {
                setDateRange(range || undefined);
                if (range?.from && range?.to) setShowCalendar(false);
              }}
              numberOfMonths={numberOfMonths}
              disabled={minDate ? { before: minDate } : undefined}
              className="font-body text-sm custom-calendar"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGuests && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[110%] right-0 w-full md:w-80 mt-2 p-6 bg-white rounded-3xl shadow-2xl border border-stone-100 text-forest z-50 flex items-center justify-between"
          >
            <span className="font-medium text-sm uppercase tracking-widest">Adults</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white transition-colors">-</button>
              <span className="w-4 text-center font-medium">{guests}</span>
              <button onClick={() => setGuests(Math.min(8, guests + 1))} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white transition-colors">+</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
