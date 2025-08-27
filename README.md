# Euger Portfolio (Next.js)

Welcome to Euger Bonete's portfolio! This project is built with Next.js
using create-next-app
and features a showcase of desktop, mobile, and GIF previews of my work.

## Screenshots

| Desktop                                       | Mobile                                       |
| --------------------------------------------- | -------------------------------------------- |
| ![](/public/images/new-portfolio-desktop.png) | ![](/public/images/new-portfolio-mobile.png) |

### GIF Preview

![](/public/images/new-portfolio.gif)

## Getting Started

Install dependencies and run the development server:

```
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
# OpenRouter API key (optional)
API_KEY='###'

# URL used for self-pinging
SELF_URL='###'

# Google Gemini API key
GOOGLE_GENERATIVE_AI_API_KEY='###'

# Neon database URL (keep secure, do not expose to client-side code)
DATABASE_URL='###'
```

Make sure to replace ### with your actual credentials.

After setting your DATABASE_URL, push the schema to your Neon database using Drizzle Kit:

```
npx drizzle-kit push
```

This will create all tables and prepare your database for the app.

Open http://localhost:3000
with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
