import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// POST /api/admin/auth — Simple admin login
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "Admin credentials not configured" },
        { status: 500 }
      );
    }

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Sign in using Supabase Auth
    const supabase = createAdminClient();
    
    // First, check if admin user exists, if not create one
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const adminUser = existingUsers?.users?.find((u: { email?: string }) => u.email === adminEmail);

    if (!adminUser) {
      // Create admin user
      const { error: createError } = await supabase.auth.admin.createUser({
        email: adminEmail,
        password: adminPassword,
        email_confirm: true,
      });

      if (createError) {
        console.error("Error creating admin user:", createError);
        return NextResponse.json(
          { error: "Failed to create admin account" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ 
      success: true,
      email: adminEmail
    });
  } catch (error) {
    console.error("Error in admin auth:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
