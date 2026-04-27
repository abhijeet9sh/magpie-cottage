"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

export function BookingWidget() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [minDate, setMinDate] = useState<Date | undefined>(new Date());
  
  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth > 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-full p-2 md:p-3 mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative z-20 shadow-2xl shadow-black/20">
      
      {/* Date Picker Button */}
      <div className="relative w-full md:w-auto flex-1">
        <button 
          onClick={() => { setShowCalendar(!showCalendar); setShowGuests(false); }}
          className="w-full flex items-center justify-between px-6 py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 text-left min-h-[80px]"
        >
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-cream" size={24} />
            <div className="flex flex-col">
              <span className="text-[10px] text-cream/60 uppercase tracking-[0.2em]">Check In / Out</span>
              <span className="text-cream font-medium text-sm md:text-base">
                {dateRange?.from ? format(dateRange.from, "MMM dd, yyyy") : "Select Dates"}
                {dateRange?.to ? ` - ${format(dateRange.to, "MMM dd, yyyy")}` : ""}
              </span>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {showCalendar && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 mt-4 p-4 bg-cream rounded-[2rem] shadow-2xl shadow-forest/10 text-forest z-50 overflow-hidden"
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
      </div>

      {/* Guests Button */}
      <div className="relative w-full md:w-auto flex-1">
        <button 
          onClick={() => { setShowGuests(!showGuests); setShowCalendar(false); }}
          className="w-full flex items-center justify-between px-6 py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 text-left min-h-[80px]"
        >
          <div className="flex items-center gap-3">
            <Users className="text-cream" size={24} />
            <div className="flex flex-col">
              <span className="text-[10px] text-cream/60 uppercase tracking-[0.2em]">Guests</span>
              <span className="text-cream font-medium text-sm md:text-base">{guests} Adults</span>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {showGuests && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-full mt-4 p-6 bg-cream rounded-[2rem] shadow-2xl shadow-forest/10 text-forest z-50 flex items-center justify-between"
            >
              <span className="font-medium text-sm uppercase tracking-widest">Adults</span>
              <div className="flex items-center gap-4">
                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors">-</button>
                <span className="w-4 text-center font-medium">{guests}</span>
                <button onClick={() => setGuests(Math.min(8, guests + 1))} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors">+</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <button className="w-full md:w-auto px-10 py-4 bg-sage text-cream font-medium hover:bg-sage-dark hover:scale-105 transition-all duration-300 rounded-2xl whitespace-nowrap shadow-lg hover:shadow-xl uppercase tracking-wider text-sm min-h-[80px]">
        Check Availability
      </button>

    </div>
  );
}
