# Portfolio Deployment Guide - Contact Form with Email

This guide explains how to set up the contact form with email functionality and deploy to Vercel.

## Prerequisites

- A Vercel account (free at https://vercel.com)
- A Gmail account
- Git installed on your computer
- Your portfolio pushed to a GitHub repository

---

## Part 1: Setting Up Gmail App Password

The contact form uses Gmail to send emails. You'll need to create an **App Password** (not your regular Gmail password for security reasons).

### Step 1: Enable 2-Factor Authentication on Your Google Account

1. Go to https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Scroll down and find **2-Step Verification**
4. Click on it and follow the prompts to enable 2FA
5. You'll need to verify your phone number

### Step 2: Create an App Password

1. After 2FA is enabled, go back to https://myaccount.google.com/security
2. Scroll to **App passwords** (it only appears if 2FA is enabled)
3. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device type)
4. Google will generate a **16-character password** - Copy this exactly as shown
5. Your App Password looks like: `abcd efgh ijkl mnop` (with spaces - remove the spaces when pasting)

**⚠️ Important:** This 16-character password is what you'll use, NOT your regular Gmail password.

---

## Part 2: Local Testing (Optional)

### Step 1: Create .env.local file

In your portfolio root directory, create a file named `.env.local`:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `abcdefghijklmnop` with the 16-character App Password (without spaces)

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test Locally

```bash
npm run dev
```

This starts a local Vercel environment. Navigate to your localhost URL and test the contact form.

---

## Part 3: Deploying to Vercel

### Step 1: Push to GitHub

Make sure all your files are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Add contact form with email functionality"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **Project**
3. Select your GitHub repository (senali2001/portfolio)
4. Click **Import**

### Step 3: Configure Environment Variables

1. In the Vercel import dialog, scroll to **Environment Variables**
2. Add these variables:
   - **Key:** `GMAIL_USER` | **Value:** `your-email@gmail.com`
   - **Key:** `GMAIL_APP_PASSWORD` | **Value:** `abcdefghijklmnop` (your 16-char password)

3. Click **Deploy**

Vercel will now build and deploy your site!

---

## Part 4: Verify It's Working

After deployment:

1. Open your deployed site (Vercel will give you a URL)
2. Scroll to the **Contact** section
3. Fill out the contact form
4. Click **Send Message**
5. You should:
   - See a success message on the website
   - Receive an email at `navodhyasenali@gmail.com` with the contact details
   - The form submitter receives a confirmation email

### If emails aren't working:

**Check Vercel logs:**
1. Go to your Vercel dashboard
2. Click your project
3. Go to **Deployments** → **Functions**
4. Click on `/api/send-email` → **Logs**
5. Look for error messages

**Common issues:**
- ❌ **"Invalid credentials"** → Wrong Gmail password or User
- ❌ **"Less secure apps"** → 2FA not enabled or App Password not created
- ❌ **Environment variables not set** → Re-add them in Vercel project settings
- ❌ **Form submission fails silently** → Check browser console for errors (F12)

---

## Part 5: Updating Environment Variables

If you need to change the email or password later:

1. Go to your Vercel project dashboard
2. Click **Settings**
3. Go to **Environment Variables**
4. Update the values
5. Click **Save**
6. Redeploy (automatic or manually trigger)

---

## Troubleshooting

### Issue: "Failed to send email" after deployment

**Solution:**
1. Verify Gmail 2FA is enabled
2. Verify App Password (16 characters, no spaces)
3. Check Vercel environment variables are set correctly
4. Check Vercel function logs for the exact error

### Issue: Form submits but no email received

**Solution:**
1. Check spam/junk folder in Gmail
2. Verify GMAIL_USER environment variable is correct
3. Check Vercel logs for errors
4. Ensure Gmail account has SMTP enabled (usually automatic)

### Issue: "Too many login attempts"

**Solution:**
Gmail might have blocked unusual login activity. Go to https://accounts.google.com/b/0/DisplayUnlockCaptcha and unlock your account, then try again.

---

## File Structure

Your project should now have:

```
portfolio/
├── index.html                 # Updated with contact form
├── style.css                  # Updated with form styles
├── package.json              # Node dependencies
├── vercel.json               # Vercel configuration
├── .env.example              # Template for env variables
├── api/
│   └── send-email.js        # Serverless function for handling emails
├── images/
├── e certificates/
└── .git/
```

---

## Security Notes

✅ **Good practices implemented:**
- App Password used instead of main Gmail password
- Environment variables stored securely in Vercel (not in code)
- HTML sanitization to prevent injection attacks
- Confirmation emails sent to both owner and sender
- Error handling to prevent exposing sensitive information

⚠️ **Important:**
- Never commit `.env.local` or actual passwords to GitHub
- `.env.example` shows the structure without sensitive values
- Always use App Passwords, never use your actual Gmail password

---

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Nodemailer Guide: https://nodemailer.com/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833

---

Happy coding! 🚀
