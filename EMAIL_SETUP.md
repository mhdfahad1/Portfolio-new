# Email Setup Guide

To enable email functionality for the contact form, you need to configure the following environment variables:

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Your email address (where you want to receive contact form messages)
CONTACT_EMAIL=your-email@example.com

# SMTP Email Settings (for sending emails)
EMAIL_USER=mhdfahad53@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

## Gmail Setup (Recommended)

1. **Enable 2-Step Verification** on your Google account

   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**

   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form" as the name
   - Copy the generated 16-character password
   - Use this as your `EMAIL_PASSWORD`

3. **Update your `.env` file:**
   ```env
   CONTACT_EMAIL=your-email@gmail.com
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # The 16-character app password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   ```

## Other Email Providers

### Outlook/Hotmail

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

### Yahoo

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

### Custom SMTP

Use your email provider's SMTP settings for `EMAIL_HOST` and `EMAIL_PORT`.

## Testing

After setting up your environment variables:

1. Restart your development server
2. Fill out the contact form on your website
3. Check your email inbox for the message

## Troubleshooting

- **"Email configuration is missing"**: Make sure all required environment variables are set
- **"Failed to send email"**:
  - Verify your email credentials are correct
  - For Gmail, make sure you're using an App Password, not your regular password
  - Check that your firewall isn't blocking port 587
  - Verify your email provider allows SMTP access
