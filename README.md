<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=680&lines=SmartTrip+AI+%F0%9F%8C%8D;Plan+Smarter.+Travel+Better." alt="SmartTrip AI typing banner" />

<br/>

<p align="center">
  <strong>Generate personalized, day-wise travel itineraries in seconds, powered by Google Gemini AI.</strong>
</p>

<br/>

<p align="center">
  <a href="https://ai-trip-planner-lake-ten.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20SmartTrip%20AI-6366f1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-10-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>
  <img src="https://img.shields.io/badge/Gemini%20AI-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white"/>
</p>

</div>

---

## Overview

**SmartTrip AI** is a full-stack React + Vite travel planning application that turns a few user preferences into a polished trip plan. Enter a destination, trip duration, budget, and traveler type, and the app generates a complete itinerary with hotel recommendations, place cards, and day-wise activity plans.

The experience combines Google OAuth, Firebase Firestore, Google Gemini AI, optional Google Places photos, and curated real-world destination imagery. A Vercel serverless API route keeps the Gemini key off the client bundle, while demo mode keeps the app usable even when AI credentials are not configured.

---

## Features

| Feature | Description |
|---|---|
| **Google OAuth** | One-click sign-in with Google authentication |
| **AI Itinerary Generation** | Gemini AI creates hotel picks and day-wise travel plans from a structured prompt |
| **Trip History** | Saved trips are persisted to Firebase Firestore and available from My Trips |
| **Real Destination Photos** | Google Places photos are used when configured, with curated real-life fallbacks when unavailable |
| **Branded Landing Preview** | SmartTrip AI landing experience with real location imagery instead of placeholder mockups |
| **Demo Mode** | Returns pre-built demo trip data when no Gemini API key is configured |
| **Serverless API Route** | Gemini requests run through a Vercel function, keeping the API key server-side |
| **Responsive UI** | Tailwind CSS layout optimized for desktop and mobile |
| **Fast Builds** | Vite 5 keeps local development and production builds quick |

---

## Tech Stack

<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>React 18, Vite, Tailwind CSS, React Router DOM, shadcn/ui, Lucide React</td>
  </tr>
  <tr>
    <td><b>AI</b></td>
    <td>Google Gemini API (<code>@google/generative-ai</code>)</td>
  </tr>
  <tr>
    <td><b>Auth & Database</b></td>
    <td>Firebase Firestore, Google OAuth (<code>@react-oauth/google</code>)</td>
  </tr>
  <tr>
    <td><b>Location Imagery</b></td>
    <td>Google Places Photos API with curated Unsplash-based destination fallbacks</td>
  </tr>
  <tr>
    <td><b>Deployment</b></td>
    <td>Vercel with a serverless API route for Gemini</td>
  </tr>
  <tr>
    <td><b>Tooling</b></td>
    <td>ESLint, PostCSS, Autoprefixer</td>
  </tr>
</table>

---

## How It Works

```text
User enters destination, days, budget, and traveler type
        |
        v
React app sends a structured prompt to /api/generate-trip
        |
        v
Vercel serverless function checks GOOGLE_GEMINI_AI_API_KEY
        |
        +-- key exists --> Gemini returns a structured itinerary
        |
        +-- key missing --> Demo trip data is returned
        |
        v
Trip is saved to Firebase Firestore
        |
        v
Trip detail pages display hotels, day-wise places, and real destination imagery
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Firestore enabled
- A Google Cloud OAuth 2.0 Client ID
- Optional: a Google Gemini API key
- Optional: a Google Places API key for live place photos

### 1. Clone the repository

```bash
git clone https://github.com/2shriyansh-ai/AI-Trip-Planner.git
cd AI-Trip-Planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
```

`VITE_GOOGLE_AUTH_CLIENT_ID` is required for Google sign-in.

`GOOGLE_GEMINI_AI_API_KEY` is optional. If omitted, the app falls back to demo trip data.

`VITE_GOOGLE_PLACES_API_KEY` is optional. If omitted, the app still shows curated real-life destination photos.

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

---

## Deployment

The app is deployed on **Vercel** with GitHub integration.

Add these environment variables in your Vercel project settings:

```env
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
```

The `api/generate-trip.js` serverless function is automatically picked up by Vercel. The Gemini key is read only inside that serverless function and is never exposed in the browser bundle.

---

## Notes

- **SmartTrip AI branding** is used across the app, browser title, and logo.
- **Real-world imagery** is prioritized through Google Places photos and curated destination fallbacks.
- **Demo mode** keeps the app usable without a Gemini key, which is useful for local development and public previews.
- **Places photos are optional**. The app still works without a Places API key, but live place-specific photos require Google Places API access.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with curiosity by <a href="https://github.com/2shriyansh-ai">@2shriyansh-ai</a></sub>
</div>
