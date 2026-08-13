# Contact Form API

This serverless function handles contact form submissions and sends emails using Gmail SMTP.

## How It Works

1. Frontend form (index.html) submits data to `/api/send-email`
2. This Node.js function processes the request
3. Sends two emails:
   - One to the portfolio owner (navodhyasenali@gmail.com)
   - One confirmation email to the form submitter

## Environment Variables Required

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=16-character-app-password
```

## Function Details

- **Method:** POST only
- **Endpoint:** `/api/send-email`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I'm interested in discussing a project..."
  }
  ```

- **Response (Success):**
  ```json
  {
    "message": "Email sent successfully!"
  }
  ```

- **Response (Error):**
  ```json
  {
    "message": "Error description",
    "error": "Detailed error (development only)"
  }
  ```

## Features

✅ Input validation  
✅ Email format validation  
✅ HTML sanitization (prevents injection)  
✅ Automatic confirmation emails  
✅ Error handling and logging  
✅ Secure App Password authentication  

## Local Testing

1. Create `.env.local` in project root with your credentials
2. Run `npm run dev`
3. Test via http://localhost:3000

## Deployment

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for full Vercel setup instructions.
