/**
 * Database connection for staffix-web
 * Supports both SQLite (local dev) and PostgreSQL (production)
 */

import path from 'path';

// Detect if we should use PostgreSQL (production) or SQLite (local)
const USE_POSTGRES = process.env.DB_HOST && process.env.DB_HOST.length > 0;

// PostgreSQL imports (only used in production)
let Pool: any = null;
let pgPool: any = null;

// SQLite imports (only used in local dev)
let Database: any = null;
let dbInstance: any = null;

// Initialize the appropriate database connection
async function initializeDb() {
  if (USE_POSTGRES) {
    // PostgreSQL connection
    if (!Pool) {
      const { Pool: PgPool } = await import('pg');
      Pool = PgPool;
      
      pgPool = new Pool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: process.env.DB_HOST?.includes('rds.amazonaws.com') 
          ? { rejectUnauthorized: false } 
          : false,
      });
      
      console.log('✅ Connected to PostgreSQL database');
    }
    return pgPool;
  } else {
    // SQLite connection (local dev)
    if (!Database) {
      const BetterSqlite3 = await import('better-sqlite3');
      Database = BetterSqlite3.default;
      
      const DB_PATH = path.join(
        process.cwd(),
        '..',
        'bots',
        'src',
        'db',
        'attendance.db'
      );
      
      dbInstance = new Database(DB_PATH);
      dbInstance.pragma('journal_mode = WAL');
      console.log('✅ Connected to SQLite database:', DB_PATH);
    }
    return dbInstance;
  }
}

export async function getDb() {
  return await initializeDb();
}

// Database query helpers (async for compatibility with both SQLite and PostgreSQL)
export const db = {
  // Get single row
  async get<T = any>(sql: string, params?: any[]): Promise<T | undefined> {
    const dbConn = await getDb();
    
    if (USE_POSTGRES) {
      // PostgreSQL: Convert ? to $1, $2, etc.
      let paramIndex = 0;
      const pgSql = sql.replace(/\?/g, () => `$${++paramIndex}`);
      const result = await dbConn.query(pgSql, params || []);
      return result.rows[0] as T | undefined;
    } else {
      // SQLite
      return dbConn.prepare(sql).get(params) as T | undefined;
    }
  },

  // Get all rows
  async all<T = any>(sql: string, params?: any[]): Promise<T[]> {
    const dbConn = await getDb();
    
    if (USE_POSTGRES) {
      // PostgreSQL: Convert ? to $1, $2, etc.
      let paramIndex = 0;
      const pgSql = sql.replace(/\?/g, () => `$${++paramIndex}`);
      const result = await dbConn.query(pgSql, params || []);
      return result.rows as T[];
    } else {
      // SQLite
      return dbConn.prepare(sql).all(params) as T[];
    }
  },

  // Run query (INSERT, UPDATE, DELETE)
  async run(sql: string, params?: any[]): Promise<{ changes: number; lastInsertRowid?: number }> {
    const dbConn = await getDb();
    
    if (USE_POSTGRES) {
      // PostgreSQL: Convert ? to $1, $2, etc.
      let paramIndex = 0;
      const pgSql = sql.replace(/\?/g, () => `$${++paramIndex}`);
      const result = await dbConn.query(pgSql, params || []);
      return { changes: result.rowCount || 0 };
    } else {
      // SQLite
      const result = dbConn.prepare(sql).run(params);
      return { changes: result.changes, lastInsertRowid: result.lastInsertRowid };
    }
  },

  // Execute raw SQL
  async exec(sql: string): Promise<void> {
    const dbConn = await getDb();
    
    if (USE_POSTGRES) {
      await dbConn.query(sql);
    } else {
      dbConn.exec(sql);
    }
  },

  // Transaction - wrap function in transaction
  async transaction<T>(fn: () => Promise<T>): Promise<T> {
    const dbConn = await getDb();
    
    if (USE_POSTGRES) {
      const client = await dbConn.connect();
      try {
        await client.query('BEGIN');
        const result = await fn();
        await client.query('COMMIT');
        return result;
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }
    } else {
      const wrappedFn = dbConn.transaction(fn);
      return wrappedFn();
    }
  },
  
  // Get database instance directly (for advanced usage)
  async getInstance() {
    return await getDb();
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

