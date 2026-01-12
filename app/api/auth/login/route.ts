import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { db, AdminUser } from '@/lib/db';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const JWT_SECRET = process.env.JWT_SECRET || 'staffix-super-secret-key-change-in-production';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    
    const { email, password } = validation.data;
    
    // Find user
    const user = await db.get<AdminUser>(
      'SELECT * FROM admin_users WHERE email = ?',
      [email]
    );
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Check if user is active
    if (!user.is_active) {
      return NextResponse.json(
        { error: 'Account is disabled. Please contact support.' },
        { status: 403 }
      );
    }
    
    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Get organization details
    const organization = await db.get<{ id: string; name: string; slug: string; subscription_status: string }>(
      'SELECT id, name, slug, subscription_status FROM organizations WHERE id = ?',
      [user.organization_id]
    );
    
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }
    
    // Check subscription status
    if (organization.subscription_status === 'suspended' || organization.subscription_status === 'expired') {
      return NextResponse.json(
        { error: 'Your subscription has expired. Please renew to continue.' },
        { status: 403 }
      );
    }
    
    // Update last login
    await db.run(
      'UPDATE admin_users SET last_login_at = ? WHERE id = ?',
      [new Date().toISOString(), user.id]
    );
    
    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        organizationId: user.organization_id,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Create response
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        isEmailVerified: user.is_email_verified === 1
      },
      organization: {
        id: organization.id,
        name: organization.name,
        slug: organization.slug,
        status: organization.subscription_status
      },
      token
    });
    
    // Set HTTP-only cookie for additional security
    response.cookies.set('staffix_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });
    
    console.log('✅ User logged in:', user.email);
    
    return response;
    
  } catch (error) {
    console.error('❌ Login error:', error);
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}

