"use client";

import { useState, useEffect } from "react";
import { format, differenceInDays, eachDayOfInterval, parseISO } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { RazorpayButton } from "./RazorpayButton";
import { motion, AnimatePresence } from "framer-motion";

export function BookingPage() {
  const [step, setStep] = useState(1);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [pets, setPets] = useState(false);
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [minDate, setMinDate] = useState<Date | undefined>(new Date());
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  
  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth > 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch unavailable dates from API
  useEffect(() => {
    async function fetchAvailability() {
      try {
        const res = await fetch("/api/availability");
        const data = await res.json();
        const dates: Date[] = [];
        for (const range of data.unavailableDates || []) {
          const interval = eachDayOfInterval({
            start: parseISO(range.from),
            end: parseISO(range.to),
          });
          dates.push(...interval);
        }
        setUnavailableDates(dates);
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    }
    fetchAvailability();
  }, []);
  
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    requests: ""
  });

  const nightlyRate = 12000;
  const nights = dateRange?.from && dateRange?.to ? differenceInDays(dateRange.to, dateRange.from) : 0;
  const subtotal = nights * nightlyRate;
  const gst = subtotal * 0.18;
  const totalAmount = subtotal + gst;

  const isStep1Valid = dateRange?.from && dateRange?.to && nights > 0;
  const isStep2Valid = personalDetails.name && personalDetails.email.includes("@") && personalDetails.phone.length >= 10;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: Form */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-200">
          
          {/* Step Indicators */}
          <div className="flex gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex flex-col gap-2">
                <div className={`h-1.5 rounded-full transition-colors ${s <= step ? "bg-sage-border" : "bg-stone-200"}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${s <= step ? "text-sage-border" : "text-stone-400"}`}>
                  Step {s}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Dates & Guests */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-display text-3xl mb-8 text-text-dark">Dates & Guests</h3>
                <div className="mb-8 flex justify-center w-full overflow-x-auto pb-4">
                  <DayPicker
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={numberOfMonths}
                    disabled={[
                      ...(minDate ? [{ before: minDate }] : []),
                      ...unavailableDates.map(d => d),
                    ]}
                    className="font-body p-4 bg-stone-50 rounded-2xl border border-stone-200 text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Adults</label>
                    <select value={guests} onChange={e => setGuests(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage bg-white text-text-mid">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guest{n>1?'s':''}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center gap-3 pt-8">
                    <input type="checkbox" id="pets-booking" checked={pets} onChange={e => setPets(e.target.checked)} className="w-5 h-5 rounded border-stone-300 text-sage focus:ring-sage accent-sage" />
                    <label htmlFor="pets-booking" className="text-sm font-medium text-text-dark">Bringing Pets?</label>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  disabled={!isStep1Valid}
                  className="w-full py-4 bg-forest text-cream rounded-xl font-medium hover:bg-forest-mid transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Details
                </button>
              </motion.div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="font-display text-3xl mb-8 text-text-dark">Your Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">Full Name *</label>
                  <input value={personalDetails.name} onChange={e => setPersonalDetails({...personalDetails, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Email Address *</label>
                    <input type="email" value={personalDetails.email} onChange={e => setPersonalDetails({...personalDetails, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Phone Number *</label>
                    <input value={personalDetails.phone} onChange={e => setPersonalDetails({...personalDetails, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">Special Requests</label>
                  <textarea value={personalDetails.requests} onChange={e => setPersonalDetails({...personalDetails, requests: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid" placeholder="Dietary requirements..." />
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setStep(1)} className="px-6 py-4 border border-stone-200 rounded-xl font-medium hover:bg-stone-50 transition-colors text-text-dark">Back</button>
                  <button 
                    onClick={() => setStep(3)}
                    disabled={!isStep2Valid}
                    className="flex-1 py-4 bg-forest text-cream rounded-xl font-medium hover:bg-forest-mid transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review & Pay
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-display text-3xl mb-8 text-text-dark">Review & Pay</h3>
                
                <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-200 space-y-4 font-body">
                  <h4 className="font-medium text-text-dark pb-2 border-b border-stone-200">Guest Information</h4>
                  <p><span className="text-text-light w-24 inline-block">Name:</span> <span className="text-text-dark">{personalDetails.name}</span></p>
                  <p><span className="text-text-light w-24 inline-block">Email:</span> <span className="text-text-dark">{personalDetails.email}</span></p>
                  <p><span className="text-text-light w-24 inline-block">Phone:</span> <span className="text-text-dark">{personalDetails.phone}</span></p>
                </div>

                <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-200 space-y-2 font-body text-sm text-text-mid">
                  <h4 className="font-medium text-text-dark pb-2 border-b border-stone-200 mb-4 text-base">Cancellation Policy</h4>
                  <p>Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away.</p>
                  <p>50% refund for cancellations made at least 7 days before check-in.</p>
                  <p>No refunds for cancellations made within 7 days of check-in.</p>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="px-6 py-4 border border-stone-200 rounded-xl font-medium hover:bg-stone-50 transition-colors text-text-dark">Back</button>
                  <div className="flex-1">
                    <RazorpayButton 
                      booking={{
                        checkIn: dateRange?.from ? format(dateRange.from, 'yyyy-MM-dd') : '',
                        checkOut: dateRange?.to ? format(dateRange.to, 'yyyy-MM-dd') : '',
                        guests,
                        name: personalDetails.name,
                        email: personalDetails.email,
                        phone: personalDetails.phone,
                        totalAmount
                      }}
                      disabled={!isStep2Valid || !isStep1Valid}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Sticky Pricing Summary */}
      <div className="lg:col-span-5 sticky top-32 space-y-6">
        <div className="bg-forest text-cream rounded-[2rem] p-8 md:p-10 shadow-2xl">
          <h3 className="font-display text-2xl mb-6 italic">Booking Summary</h3>
          
          <div className="space-y-4 mb-8 font-body border-b border-white/10 pb-6">
            <div className="flex justify-between items-center">
              <span className="text-cream/70">Check-in</span>
              <span className="font-medium">{dateRange?.from ? format(dateRange.from, "MMM dd, yyyy") : "Select date"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cream/70">Check-out</span>
              <span className="font-medium">{dateRange?.to ? format(dateRange.to, "MMM dd, yyyy") : "Select date"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cream/70">Guests</span>
              <span className="font-medium">{guests} Adults {pets ? "+ Pets" : ""}</span>
            </div>
          </div>

          {nights > 0 ? (
            <div className="space-y-4 font-body">
              <div className="flex justify-between text-cream/80">
                <span>₹{nightlyRate.toLocaleString()} × {nights} night{nights > 1 ? 's' : ''}</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-cream/80">
                <span>Taxes (18% GST)</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-2xl font-display italic pt-6 border-t border-white/10 text-sage mt-6">
                <span>Total</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-cream/50 font-body py-8 italic">
              Select your dates to see the pricing summary.
            </div>
          )}
        </div>

        {/* Trust Signals */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm flex flex-col gap-4 font-body text-sm text-text-mid">
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-sage-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <div>
              <span className="block font-medium text-text-dark">Secure Booking</span>
              <span className="text-xs">Your payment is encrypted and 100% secure.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-sage-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="block font-medium text-text-dark">Instant Confirmation</span>
              <span className="text-xs">Receive your booking details immediately.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
