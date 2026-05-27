<div align="center">

# AI Trip Planner

### Plan smarter. Travel better. Generate trip itineraries in seconds.

AI Trip Planner is a React and Vite travel planning app that helps users create day-wise trip itineraries based on destination, trip duration, budget, and traveler type.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[Live Demo](https://ai-trip-planner-lake-ten.vercel.app/)**

</div>

## Overview

Users can sign in with Google, generate a trip plan, save it to Firebase Firestore, and view their saved trips later. The app runs Gemini through a Vercel serverless API route when a Gemini key is configured, and falls back to demo trip data when it is not.

## Features

- Google sign-in using OAuth
- Manual destination entry
- AI-generated trip plans with hotel recommendations and day-wise itinerary
- Demo trip fallback when no Gemini API key is configured
- Saved trip history using Firebase Firestore
- Trip detail pages with hotel and place cards
- Fallback images when place photos are unavailable
- Responsive UI built with Tailwind CSS
- Deployed on Vercel with GitHub integration

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Firebase Firestore
- Google OAuth
- Google Gemini API
- Vercel Serverless Functions
- ESLint


```

## How It Works

```text
User enters destination, days, budget, and traveler type
        |
        v
Frontend sends a structured prompt to /api/generate-trip
        |
        v
Vercel serverless function uses Gemini if GOOGLE_GEMINI_AI_API_KEY is available
        |
        v
If Gemini is unavailable, the app returns a demo trip plan
        |
        v
Trip data is saved to Firebase Firestore
        |
        v
User can view saved trips and itinerary details
```

## Environment Variables

Create a `.env` file in the project root for local development.

```env
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
```

`VITE_GOOGLE_AUTH_CLIENT_ID` is required for Google sign-in.

`GOOGLE_GEMINI_AI_API_KEY` is optional for local/demo testing. If it is missing, the app generates demo trip data instead of calling Gemini.

The app no longer requires a Google Places API key.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Deployment

The app is deployed on Vercel.

For production, add these environment variables in Vercel:

```env
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
```

Then redeploy the project from the Vercel dashboard.

## Notes

- Destination input is manual, so Google Maps billing is not required.
- Place photos use a fallback image if no external photo API is configured.
- Gemini is called from the serverless API route, so the Gemini key is not exposed in the browser bundle.

## License

This project is open source and available under the MIT License.
