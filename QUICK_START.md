# Quick Start: Contact Form Setup

## ✅ What I've Added

Your portfolio now has a fully functional contact form with email notifications!

### Files Added/Modified:

1. **index.html** - Added professional contact form section with form fields and contact info
2. **style.css** - Added styling for contact form with animations
3. **api/send-email.js** - Serverless function to handle email submissions
4. **package.json** - Node dependencies (nodemailer for email)
5. **vercel.json** - Vercel configuration
6. **.env.example** - Template for environment variables
7. **.gitignore** - To prevent committing sensitive files
8. **DEPLOYMENT_GUIDE.md** - Complete step-by-step deployment guide
9. **api/README.md** - API documentation

---

## 🚀 Quick Deploy to Vercel (5 Steps)

### Step 1: Get Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already done)
3. Create an App Password for "Mail" on "Windows"
4. Copy the 16-character password

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Add contact form with email functionality"
git push origin main
```

### Step 3: Connect to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your portfolio repository

### Step 4: Add Environment Variables
In the Vercel import screen:
- Add `GMAIL_USER` = your-email@gmail.com
- Add `GMAIL_APP_PASSWORD` = your-16-char-app-password

### Step 5: Deploy
Click the "Deploy" button and wait for completion!

---

## 📧 How the Contact Form Works

### For Visitors:
1. Fill out the contact form at the bottom of your portfolio
2. Click "Send Message"
3. They receive a confirmation email
4. The form is cleared

### For You:
1. You receive an email with their name, email, subject, and message
2. You can reply directly to their email
3. All emails are sent securely via Gmail SMTP

---

## 📋 Form Features

- ✅ Full name, email, subject, and message fields
- ✅ Input validation on frontend and backend
- ✅ Real-time feedback (sending... success/error messages)
- ✅ Disabled submit button while sending
- ✅ Confirmation emails to both sender and receiver
- ✅ Responsive design (works on mobile too)
- ✅ HTML sanitization for security

---

## 🔒 Security

- Passwords never stored in code
- Environment variables only in Vercel
- Gmail App Passwords used (not actual password)
- Input validation and HTML sanitization
- Serverless functions run on Vercel's secure infrastructure

---

## ❓ Troubleshooting

### "Email sent successfully!" but no email received?
- Check spam folder
- Wait a few minutes
- Verify email configuration in Vercel

### Form shows error after clicking send?
- Check browser console (F12 → Console tab)
- Verify environment variables are set in Vercel
- Check Vercel function logs

### Need detailed help?
See **DEPLOYMENT_GUIDE.md** for complete troubleshooting section

---

## 📱 Testing Locally (Optional)

```bash
# Install dependencies
npm install

# Create .env.local with your credentials
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-16-char-password

# Start local server
npm run dev

# Test at http://localhost:3000
```

---

## 🎉 That's It!

Your portfolio now has a complete contact form system. Visitors can easily reach out to you, and you'll receive their messages directly in your inbox!

Questions? Check DEPLOYMENT_GUIDE.md for more details.
