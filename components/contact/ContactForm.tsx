"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.string().optional(),
  pets: z.boolean().optional(),
  requests: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send enquiry");

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to send enquiry. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Full Name *</label>
              <input
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">Email Address *</label>
                <input
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">Phone / WhatsApp *</label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">Check-in Date</label>
                <input
                  type="date"
                  {...register("checkIn")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">Check-out Date</label>
                <input
                  type="date"
                  {...register("checkOut")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">Guests</label>
                <select
                  {...register("guests")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="pets"
                {...register("pets")}
                className="w-5 h-5 rounded border-stone-300 text-sage focus:ring-sage accent-sage"
              />
              <label htmlFor="pets" className="text-sm font-medium text-text-dark">Bringing Pets?</label>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Special Requests</label>
              <textarea
                {...register("requests")}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors text-text-mid"
                placeholder="Any dietary requirements or special arrangements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-forest text-cream rounded-xl font-medium hover:bg-forest-mid transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry →"}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 bg-sage-light text-sage-dark rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-display text-3xl mb-4 text-forest">Enquiry Received</h3>
            <p className="font-body text-text-mid mb-8">Thank you for your interest in Magpie Cottage. We&apos;ll be in touch shortly to confirm availability.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-3 bg-stone-100 text-text-dark rounded-full font-medium hover:bg-stone-200 transition-colors"
            >
              Send another enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
