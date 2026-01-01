# Email Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=hello@staffix.co
SMTP_PASSWORD=your_email_password_here
```

## Important Notes

1. **SMTP_PASSWORD**: Use your Hostinger email account password
2. **Security**: Never commit `.env.local` to git (it's already in .gitignore)
3. **Production**: Set these environment variables in your AWS/hosting platform

## Testing

After setting up the environment variables:
1. Fill out the contact form
2. Submit the form
3. Check hello@staffix.co inbox for the email

## Troubleshooting

If emails aren't sending:
- Verify SMTP credentials are correct
- Check that port 465 is not blocked by firewall
- Ensure the email password is correct (may need to reset if unsure)
