# Deployment Guide

This guide provides instructions for deploying your website to either Vercel or GitHub Pages.

## Deploying to Vercel (Recommended)

Vercel offers the best experience for React applications with built-in features for handling client-side routing.

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up/login with your GitHub account
3. Import your repository
4. Configure the deployment:
   - Build Command: `npm run build:client`
   - Output Directory: `dist/public`
   - Framework Preset: Vite
5. Click Deploy

The site will be automatically deployed, and Vercel will provide a URL. You can also configure a custom domain in the Vercel dashboard.

## Deploying to GitHub Pages

GitHub Pages is free but requires more configuration for React apps.

1. Push your code to GitHub
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"
3. The GitHub workflow file (`.github/workflows/deploy.yml`) is already configured to deploy your site

The site will be available at `https://yourusername.github.io/erin-website/` (replace with your GitHub username).

## Notes about the Contact Form

The contact form in your site is currently configured to use a backend API. Since we're deploying as a static site, you have a few options:

1. **Keep the current implementation**: The form will show but submissions will fail.
2. **Update later**: Modify the contact form to use a third-party service like Formspree, GetForm, or Netlify Forms.
3. **Implement serverless function**: If using Vercel, you can create serverless functions later to handle form submissions.

## Environment Variables

For custom domain deployment on GitHub Pages, update the `vite.config.ts` file:

```ts
base: process.env.GITHUB_PAGES === "true" ? "/" : "/", // For custom domain
```