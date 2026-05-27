<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=AI+Trip+Planner+%F0%9F%8C%8D;Plan+Smarter.+Travel+Better." alt="Typing SVG" />

<br/>

<p align="center">
  <strong>Generate personalized, day-wise travel itineraries in seconds — powered by Google Gemini AI.</strong>
</p>

<br/>

<p align="center">
  <a href="https://ai-trip-planner-lake-ten.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-6366f1?style=for-the-badge" alt="Live Demo"/>
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

## 📖 Overview

**AI Trip Planner** is a full-stack React + Vite web application that takes the stress out of travel planning. Enter your destination, trip duration, budget, and traveler type — and the app generates a complete itinerary with hotel recommendations and day-wise activity plans, all powered by Google Gemini AI.

Users authenticate with Google OAuth, generated trips are persisted to Firebase Firestore, and the app is deployed on Vercel with a serverless API route that keeps the Gemini key safely off the client bundle. A demo fallback ensures the app remains fully usable even without API keys configured.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Google OAuth** | One-click sign-in via Google authentication |
| 🤖 **AI Itinerary Generation** | Gemini AI produces hotel picks and day-wise plans from a structured prompt |
| 🗂️ **Trip History** | All trips saved to Firebase Firestore and accessible anytime |
| 🖼️ **Fallback Images** | Graceful image fallback when place photos are unavailable |
| 🎭 **Demo Mode** | Returns pre-built demo trip data when no Gemini API key is configured |
| 🔒 **Serverless API Route** | Gemini key lives in a Vercel serverless function — never exposed to the browser |
| 📱 **Responsive UI** | Fully responsive across mobile and desktop with Tailwind CSS |
| ⚡ **Fast Builds** | Vite 5 for lightning-fast dev server and production builds |

---

## 🛠️ Tech Stack

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
    <td><b>Auth & DB</b></td>
    <td>Firebase Firestore, Google OAuth (<code>@react-oauth/google</code>)</td>
  </tr>
  <tr>
    <td><b>Deployment</b></td>
    <td>Vercel (with serverless API route for Gemini)</td>
  </tr>
  <tr>
    <td><b>Tooling</b></td>
    <td>ESLint, PostCSS, Autoprefixer</td>
  </tr>
</table>

---

## 🔄 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  User fills in: destination · days · budget · traveler type │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
              Frontend sends structured prompt
                to /api/generate-trip (Vercel)
                            │
              ┌─────────────┴──────────────┐
              │                            │
              ▼                            ▼
   GOOGLE_GEMINI_AI_API_KEY          Key not found
        is set?                           │
              │                           ▼
              ▼                    Returns demo trip
   Calls Gemini API, returns              data
     real AI-generated plan
              │
              └──────────────┬────────────┘
                             │
                             ▼
              Trip data saved to Firebase Firestore
                             │
                             ▼
           User can view trip details, hotels,
              and day-wise itinerary cards
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Firestore enabled
- A Google Cloud OAuth 2.0 Client ID
- *(Optional)* A Google Gemini API key

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
```

> `VITE_GOOGLE_AUTH_CLIENT_ID` is **required** for Google sign-in.  
> `GOOGLE_GEMINI_AI_API_KEY` is **optional** — the app falls back to demo trip data if omitted.  
> No Google Places API key is required.

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

---

## 🚀 Deployment

The app is deployed on **Vercel** with GitHub integration.

Add these environment variables in your Vercel project settings:

```env
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
```

Then trigger a redeploy from the Vercel dashboard. The `api/generate-trip.js` serverless function is automatically picked up by Vercel — no extra configuration needed.

> ⚠️ **Note:** `GOOGLE_GEMINI_AI_API_KEY` is used only in the serverless function and is never exposed in the browser bundle.

---

## 📝 Notes

- **No Maps billing required** — destination input is manual text entry, no Google Maps API calls.
- **Graceful image fallback** — place cards display a default image when no external photo API is configured.
- **Gemini key security** — the API key is exclusively read server-side inside the Vercel function.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ☕ and curiosity · <a href="https://github.com/2shriyansh-ai">@2shriyansh-ai</a></sub>
</div>

