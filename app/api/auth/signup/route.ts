import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { db } from '@/lib/db';

// Validation schema
const signupSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  organizationName: z.string().min(2, 'Organization name must be at least 2 characters'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = signupSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    
    const { fullName, email, password, organizationName } = validation.data;
    
    // Check if email already exists
    const existingUser = await db.get<{ id: string }>(
      'SELECT id FROM admin_users WHERE email = ?',
      [email]
    );
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }
    
    // Create organization slug
    const slug = organizationName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 50);
    
    // Check if slug is taken
    let finalSlug = slug;
    let counter = 1;
    while (await db.get('SELECT id FROM organizations WHERE slug = ?', [finalSlug])) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }
    
    // Calculate trial end date (14 days from now)
    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 14);
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Generate verification token
    const emailVerificationToken = uuidv4();
    const emailVerificationExpires = new Date();
    emailVerificationExpires.setHours(emailVerificationExpires.getHours() + 24); // 24 hours
    
    // Create organization and user
    const orgId = uuidv4();
    const userId = uuidv4();
    
    try {
      // Use transaction to ensure both operations succeed or fail together
      await db.transaction(async () => {
        // Create organization
        await db.run(`
          INSERT INTO organizations (
            id, name, slug, subscription_plan, subscription_status,
            trial_ends_at, max_employees, max_departments, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          orgId,
          organizationName,
          finalSlug,
          'trial',
          'active',
          trialEndsAt.toISOString(),
          10, // Default trial limit
          5,  // Default department limit
          new Date().toISOString(),
          new Date().toISOString()
        ]);
        
        // Create admin user
        await db.run(`
          INSERT INTO admin_users (
            id, organization_id, email, password_hash, full_name, role,
            is_email_verified, email_verification_token, email_verification_expires,
            is_active, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          userId,
          orgId,
          email,
          passwordHash,
          fullName,
          'org_admin', // First user is organization admin
          1, // Email verified (set to 1 since email verification flow isn't implemented yet)
          emailVerificationToken,
          emailVerificationExpires.toISOString(),
          1, // Active
          new Date().toISOString(),
          new Date().toISOString()
        ]);
      });
    } catch (txnError) {
      console.error('❌ Transaction error:', txnError);
      throw txnError;
    }
    
    // TODO: Send verification email
    // await sendVerificationEmail(email, emailVerificationToken);
    
    console.log('✅ New organization created:', orgId);
    console.log('✅ Admin user created:', userId);
    
    return NextResponse.json({
      success: true,
      organizationId: orgId,
      userId: userId,
      slug: finalSlug,
      message: 'Account created successfully. Please check your email to verify your account.',
      // For development, return the token
      ...(process.env.NODE_ENV === 'development' && {
        verificationToken: emailVerificationToken
      })
    }, { status: 201 });
    
  } catch (error) {
    console.error('❌ Signup error:', error);
    console.error('❌ Error details:', error instanceof Error ? error.message : String(error));
    console.error('❌ Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { 
        error: 'Failed to create account. Please try again.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}

