import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, bookingDetails } = body;

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Calculate pricing
    const nightlyRate = 12000;
    const nights = bookingDetails?.nights || 1;
    const subtotal = nights * nightlyRate;
    const gst = subtotal * 0.18;
    const totalAmount = subtotal + gst;

    // Save booking to database with pending status
    const { data: booking, error: dbError } = await supabase
      .from("bookings")
      .insert({
        status: "pending",
        payment_status: "pending",
        check_in: bookingDetails?.checkIn,
        check_out: bookingDetails?.checkOut,
        nights: nights,
        guests: bookingDetails?.guests || 1,
        pets: bookingDetails?.pets || false,
        nightly_rate: nightlyRate,
        subtotal: subtotal,
        gst: gst,
        total_amount: totalAmount,
        guest_name: bookingDetails?.name || "Guest",
        guest_email: bookingDetails?.email || "",
        guest_phone: bookingDetails?.phone || "",
        special_requests: bookingDetails?.requests || "",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Error saving booking to database:", dbError);

      // If it's a conflict error (overlap or check constraint), return a 400
      if (dbError.code === "23P01" || dbError.code === "23514") {
        return NextResponse.json(
          { error: "This date range is already booked or invalid. Please try another selection." },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Could not create booking. Please try again." },
        { status: 500 }
      );
    }

    const options = {
      amount: Math.round(totalAmount * 100), // amount in the smallest currency unit (paise) — always use server-calculated amount
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        bookingId: booking?.id || "",
        checkIn: bookingDetails?.checkIn,
        checkOut: bookingDetails?.checkOut,
        guests: bookingDetails?.guests?.toString(),
        name: bookingDetails?.name,
        email: bookingDetails?.email,
      },
    };

    const order = await razorpay.orders.create(options);

    // Update booking with Razorpay order ID
    if (booking?.id) {
      await supabase
        .from("bookings")
        .update({ razorpay_order_id: order.id })
        .eq("id", booking.id);
    }

    return NextResponse.json(
      { orderId: order.id, bookingId: booking?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
