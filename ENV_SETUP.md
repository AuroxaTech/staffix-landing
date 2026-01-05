# Environment Variables Setup for StaffiX Web

Create a `.env.local` file in the `staffix-web` directory with the following variables:

```bash
# =============================================================================
# JWT Authentication
# =============================================================================
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# =============================================================================
# Slack OAuth Configuration  
# =============================================================================
# Create a Slack App at https://api.slack.com/apps

SLACK_CLIENT_ID=1234567890.1234567890
SLACK_CLIENT_SECRET=abc123def456ghi789jkl012mno345pq
SLACK_REDIRECT_URI=http://localhost:3000/api/slack/callback

# For production:
# SLACK_REDIRECT_URI=https://yourdomain.com/api/slack/callback

# =============================================================================
# Email Configuration
# =============================================================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

EMAIL_FROM_NAME=StaffiX
EMAIL_FROM_ADDRESS=noreply@staffix.co

# =============================================================================
# Application
# =============================================================================
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## How to Get Slack Credentials

1. Go to https://api.slack.com/apps
2. Click "Create New App"
3. Choose "From scratch"
4. Name it "StaffiX" and select your workspace
5. Go to "OAuth & Permissions"
6. Add Redirect URL: `http://localhost:3000/api/slack/callback`
7. Add Bot Token Scopes (see required scopes in SAAS_IMPLEMENTATION_STATUS.md)
8. Copy "Client ID" and "Client Secret" from "Basic Information"

## Quick Start

```bash
# Copy this template
cp ENV_SETUP.md .env.local

# Edit .env.local with your values
nano .env.local

# Install dependencies
npm install

# Run development server
npm run dev
```

