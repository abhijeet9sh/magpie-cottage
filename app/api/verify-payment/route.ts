import { NextResponse } from "next/server";
import crypto from "crypto";
import { createAdminClient } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingDetails,
    } = await req.json();

    const secret = process.env.RAZORPAY_KEY_SECRET || "rzp_secret_placeholder";

    // Verify signature
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpay_signature) {
      // Mark payment as failed in database
      const supabase = createAdminClient();
      await supabase
        .from("bookings")
        .update({ payment_status: "failed" })
        .eq("razorpay_order_id", razorpay_order_id);

      return NextResponse.json(
        { error: "Transaction not legit!" },
        { status: 400 }
      );
    }

    // Update booking in database
    const supabase = createAdminClient();
    const { error: updateError } = await supabase
      .from("bookings")
      .update({
        status: "confirmed",
        payment_status: "paid",
        razorpay_payment_id,
        razorpay_signature,
      })
      .eq("razorpay_order_id", razorpay_order_id);

    if (updateError) {
      console.error("Error updating booking:", updateError);
    }

    // Send confirmation email to guest
    if (bookingDetails?.email) {
      try {
        await resend.emails.send({
          from: "Magpie Cottage <onboarding@resend.dev>",
          to: [bookingDetails.email],
          subject: "Booking Confirmed — Magpie Cottage 🏡",
          html: `
            <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #394735; font-size: 28px; margin: 0;">Booking Confirmed ✓</h1>
                <p style="color: #8A8A8A; font-size: 14px;">Magpie Cottage, Lansdowne</p>
              </div>
              
              <div style="background: #F0F2ED; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <h2 style="color: #394735; font-size: 18px; margin: 0 0 16px 0;">Reservation Details</h2>
                <table style="width: 100%; font-size: 14px; color: #525252;">
                  <tr><td style="padding: 6px 0; color: #8A8A8A;">Guest</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingDetails.name}</td></tr>
                  <tr><td style="padding: 6px 0; color: #8A8A8A;">Check-in</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingDetails.checkIn}</td></tr>
                  <tr><td style="padding: 6px 0; color: #8A8A8A;">Check-out</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingDetails.checkOut}</td></tr>
                  <tr><td style="padding: 6px 0; color: #8A8A8A;">Guests</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingDetails.guests}</td></tr>
                  <tr><td style="padding: 6px 0; color: #8A8A8A;">Total Paid</td><td style="padding: 6px 0; text-align: right; font-weight: 600; color: #394735;">₹${Number(bookingDetails.totalAmount).toLocaleString()}</td></tr>
                </table>
              </div>

              <div style="background: #FAF9F7; border: 1px solid #E8E4DB; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #394735; font-size: 16px; margin: 0 0 12px 0;">Getting There</h3>
                <p style="color: #525252; font-size: 14px; line-height: 1.6; margin: 0;">
                  Magpie Cottage is located in Lansdowne, Pauri Garhwal, Uttarakhand. We'll send you detailed directions and a WhatsApp contact 3 days before your check-in.
                </p>
              </div>

              <p style="color: #8A8A8A; font-size: 12px; text-align: center;">
                Questions? WhatsApp us at +91 98119 34909<br/>
                or email bookmagpiecottage@gmail.com
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
        // Don't fail the payment verification because of email issues
      }
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: "Magpie Cottage <onboarding@resend.dev>",
        to: ["bookmagpiecottage@gmail.com"],
        subject: `New Booking: ${bookingDetails?.name} — ${bookingDetails?.checkIn} to ${bookingDetails?.checkOut}`,
        html: `
          <h2>New Booking Received! 🎉</h2>
          <p><strong>Guest:</strong> ${bookingDetails?.name}</p>
          <p><strong>Email:</strong> ${bookingDetails?.email}</p>
          <p><strong>Phone:</strong> ${bookingDetails?.phone}</p>
          <p><strong>Check-in:</strong> ${bookingDetails?.checkIn}</p>
          <p><strong>Check-out:</strong> ${bookingDetails?.checkOut}</p>
          <p><strong>Guests:</strong> ${bookingDetails?.guests}</p>
          <p><strong>Amount Paid:</strong> ₹${Number(bookingDetails?.totalAmount || 0).toLocaleString()}</p>
          <p><strong>Razorpay Order:</strong> ${razorpay_order_id}</p>
          <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        `,
      });
    } catch (adminEmailError) {
      console.error("Error sending admin notification:", adminEmailError);
    }

    return NextResponse.json(
      { message: "Payment verified successfully", ok: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
