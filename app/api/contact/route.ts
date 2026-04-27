import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, checkIn, checkOut, guests, pets, requests } = body;

    // Save enquiry to database
    const supabase = createAdminClient();
    const { error: dbError } = await supabase
      .from("enquiries")
      .insert({
        name: fullName,
        email: email || "",
        phone: phone || "",
        message: `${requests || ""}${pets ? "\n\nBringing pets: Yes" : ""}`,
        check_in: checkIn || null,
        check_out: checkOut || null,
        guests: guests || null,
        status: "new",
      });

    if (dbError) {
      console.error("CRITICAL: Error saving enquiry to database:", dbError);
      return NextResponse.json(
        { error: "Failed to save enquiry to database", details: dbError.message },
        { status: 500 }
      );
    }

    // Send email to admin
    try {
      await resend.emails.send({
        from: "Magpie Cottage Website <onboarding@resend.dev>",
        to: ["bookmagpiecottage@gmail.com"],
        subject: `New Enquiry from ${fullName}`,
        html: `
          <h2>New Enquiry Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Check-In:</strong> ${checkIn || "Not specified"}</p>
          <p><strong>Check-Out:</strong> ${checkOut || "Not specified"}</p>
          <p><strong>Guests:</strong> ${guests || "Not specified"}</p>
          <p><strong>Pets:</strong> ${pets ? "Yes" : "No"}</p>
          <p><strong>Requests:</strong> ${requests || "None"}</p>
        `,
      });
    } catch (emailError) {
      console.error("Error sending admin email:", emailError);
      // We don't return 500 here because the enquiry is already saved in DB
    }

    // Send auto-reply to user
    if (email) {
      try {
        await resend.emails.send({
          from: "Magpie Cottage <onboarding@resend.dev>",
          to: [email],
          subject: "We've received your enquiry - Magpie Cottage",
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${fullName},</p>
            <p>We have received your enquiry regarding a stay at Magpie Cottage. Our team will review your request and get back to you shortly with availability and further details.</p>
            <p>Best regards,<br/>The Magpie Cottage Team</p>
          `,
        });
      } catch (userEmailError) {
        console.error("Error sending user auto-reply:", userEmailError);
      }
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
