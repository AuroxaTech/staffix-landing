import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';

const updateChannelsSchema = z.object({
  organizationId: z.string().uuid(),
  salesChannelId: z.string().optional(),
  allowedChannels: z.array(z.string()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = updateChannelsSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    
    const { organizationId, salesChannelId, allowedChannels } = validation.data;
    
    // Verify organization exists
    const organization = db.get<{ id: string; name: string }>(
      'SELECT id, name FROM organizations WHERE id = ?',
      [organizationId]
    );
    
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }
    
    // Convert allowed channels array to comma-separated string
    const allowedChannelsStr = allowedChannels?.join(',') || '';
    
    // Update organization settings
    db.run(`
      UPDATE organizations 
      SET 
        sales_channel_id = ?,
        allowed_channels = ?,
        updated_at = ?
      WHERE id = ?
    `, [
      salesChannelId || null,
      allowedChannelsStr || null,
      new Date().toISOString(),
      organizationId
    ]);
    
    console.log('✅ Channel configuration updated for:', organization.name);
    console.log('   Sales channel:', salesChannelId || 'none');
    console.log('   Allowed channels:', allowedChannels?.length || 0);
    
    return NextResponse.json({
      success: true,
      message: 'Channel configuration saved successfully',
      organization: {
        id: organization.id,
        name: organization.name
      }
    });
    
  } catch (error) {
    console.error('❌ Error updating channels:', error);
    return NextResponse.json(
      { error: 'Failed to update channel configuration' },
      { status: 500 }
    );
  }
}

