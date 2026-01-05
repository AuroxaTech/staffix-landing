/**
 * Database connection for staffix-web
 * Connects to the same SQLite database used by the bot
 */

import Database from 'better-sqlite3';
import path from 'path';

// Path to the bots database
const DB_PATH = path.join(
  process.cwd(),
  '..',
  'bots',
  'src',
  'db',
  'attendance.db'
);

let dbInstance: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!dbInstance) {
    try {
      dbInstance = new Database(DB_PATH);
      dbInstance.pragma('journal_mode = WAL'); // Better performance
      console.log('✅ Connected to database:', DB_PATH);
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw new Error('Could not connect to database');
    }
  }
  return dbInstance;
}

// Database query helpers
export const db = {
  // Get single row
  get<T = any>(sql: string, params?: any[]): T | undefined {
    const dbConn = getDb();
    return dbConn.prepare(sql).get(params) as T | undefined;
  },

  // Get all rows
  all<T = any>(sql: string, params?: any[]): T[] {
    const dbConn = getDb();
    return dbConn.prepare(sql).all(params) as T[];
  },

  // Run query (INSERT, UPDATE, DELETE)
  run(sql: string, params?: any[]): Database.RunResult {
    const dbConn = getDb();
    return dbConn.prepare(sql).run(params);
  },

  // Execute raw SQL
  exec(sql: string): void {
    const dbConn = getDb();
    dbConn.exec(sql);
  },

  // Transaction - wrap function in better-sqlite3 transaction
  transaction<T>(fn: () => T): T {
    const dbConn = getDb();
    const wrappedFn = dbConn.transaction(fn);
    return wrappedFn();
  },
  
  // Get database instance directly (for advanced usage)
  getInstance(): Database.Database {
    return getDb();
  }
};

// Type definitions for our tables
export interface Organization {
  id: string;
  name: string;
  slug: string;
  slack_workspace_id: string | null;
  slack_bot_token: string | null;
  slack_team_name: string | null;
  slack_bot_user_id: string | null;
  slack_signing_secret: string | null;
  sales_channel_id: string | null;
  allowed_channels: string | null;
  google_calendar_id: string | null;
  subscription_plan: string;
  subscription_status: string;
  trial_ends_at: string | null;
  subscription_started_at: string | null;
  billing_cycle: string;
  max_employees: number;
  max_departments: number;
  created_at: string;
  updated_at: string;
  last_active_at: string | null;
}

export interface AdminUser {
  id: string;
  organization_id: string;
  email: string;
  password_hash: string;
  full_name: string | null;
  role: string;
  is_email_verified: number;
  email_verification_token: string | null;
  email_verification_expires: string | null;
  reset_password_token: string | null;
  reset_password_expires: string | null;
  slack_user_id: string | null;
  is_active: number;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
}

