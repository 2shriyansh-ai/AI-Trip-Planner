<div align="center">

# 🌍 AI Trip Planner

### Plan smarter. Travel better. Powered by Gemini AI.

An intelligent full-stack travel planning web application that generates personalized itineraries, hotel recommendations, and day-wise travel plans — in seconds.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

🔗 **[Live Demo →](https://ai-trip-planner-lake-ten.vercel.app/)** &nbsp;|&nbsp; ⭐ **Star this repo if you found it helpful!**

</div>

---

## 📌 Overview

AI Trip Planner is a full-stack web application that removes the friction from travel planning. Users log in with Google, describe their trip preferences, and receive a complete AI-generated itinerary — including curated hotels, a day-by-day plan, and real place photos pulled directly from Google.

Built with React on the frontend, Firebase for authentication and data persistence, and Google's Gemini AI for intelligent itinerary generation.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Google Authentication | Secure one-click login via Firebase OAuth |
| 🤖 AI Itinerary Generation | Gemini AI creates personalized travel plans based on user preferences |
| 📍 Smart Destination Search | Google Places Autocomplete for accurate location input |
| 🖼️ Real Place Photos | Google Photos API displays actual images for every hotel and location |
| 💾 Trip History | All generated trips are saved per user in Firebase Firestore |
| 📱 Fully Responsive | Optimized layout across mobile, tablet, and desktop |
| ☁️ Cloud Deployed | Live on Vercel with CI/CD from GitHub |

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — component-based UI architecture
- **Vite** — lightning-fast dev server and build tool
- **TailwindCSS** — utility-first styling
- **Shadcn/ui** — accessible, customizable component library
- **React Router DOM** — client-side navigation

### Backend & Cloud
- **Firebase Authentication** — Google OAuth login flow
- **Firebase Firestore** — NoSQL cloud database for trip storage

### APIs
- **Google Gemini AI** — generates structured travel itineraries via prompt engineering
- **Google Places API** — destination autocomplete
- **Google Photos API** — real images for hotels and attractions

### DevOps
- **Vercel** — deployment and hosting
- **Git + GitHub** — version control

---

## 📁 Project Structure

```
AI-Trip-Planner/
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── custom/            # App-specific components (Hero, Navbar)
│   │   └── ui/                # Shadcn base components
│   ├── pages/
│   │   ├── Home/              # Landing page
│   │   ├── CreateTrip/        # Trip preferences form + AI call
│   │   ├── ViewTrip/          # Itinerary display page
│   │   └── MyTrips/           # User's saved trips dashboard
│   ├── service/
│   │   ├── AIModal.jsx        # Gemini API integration & prompt template
│   │   ├── firebaseConfig.jsx # Firebase initialization & Firestore helpers
│   │   └── GlobalApi.jsx      # Google Photos API calls
│   └── constants/
│       └── options.jsx        # Budget options, group types, AI prompt
├── .env                       # Environment variables (not committed)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- npm (comes with Node.js)
- A [Google Cloud](https://console.cloud.google.com/) account
- A [Firebase](https://console.firebase.google.com/) project

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/2shriyansh-ai/AI-Trip-Planner.git

# 2. Navigate into the project directory
cd AI-Trip-Planner

# 3. Install all dependencies
npm install

# 4. Create a .env file in the root directory (see below)

# 5. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🔑 Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_firebase_auth_client_id
```

> ⚠️ **Security Note:** Never commit your `.env` file. It is already listed in `.gitignore`. For deployment, add these as environment variables in your Vercel project settings.

### How to Get Each Key

| Key | Source |
|---|---|
| `VITE_GOOGLE_PLACES_API_KEY` | [Google Cloud Console](https://console.cloud.google.com/) → Enable Places API |
| `VITE_GOOGLE_GEMINI_AI_API_KEY` | [Google AI Studio](https://makersuite.google.com/) |
| `VITE_GOOGLE_AUTH_CLIENT_ID` | [Firebase Console](https://console.firebase.google.com/) → Authentication → Google |

---

## 🧩 How the AI Works

```
User Input (destination + days + budget + group type)
          ↓
Structured prompt sent to Gemini AI API
          ↓
Gemini returns JSON with:
  - Hotel list (name, address, price, rating, description)
  - Day-by-day itinerary (place, timing, description, geo coords)
          ↓
App parses JSON → renders as interactive UI cards
          ↓
Google Photos API fetches real images for each location
          ↓
Complete trip saved to Firestore under user's account
```

The key challenge is **prompt engineering** — the prompt instructs Gemini to return strictly formatted JSON so the app can reliably parse and render it.

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## ☁️ Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Add all `.env` variables under **Environment Variables** in Vercel settings
4. Click **Deploy**

Every push to `main` triggers an automatic redeploy.

---

## 🔮 Future Improvements

- [ ] Google Maps integration to visualize itinerary geographically
- [ ] Edit and customize AI-generated trips
- [ ] Share itineraries via public link
- [ ] Export trip as PDF
- [ ] Multi-language support
- [ ] Budget tracker per trip

---

## 🌱 What I Learned

- Prompt engineering with Gemini AI for consistent structured JSON output
- Firebase Authentication setup with Google OAuth 2.0
- Reading and writing data to Firebase Firestore in real time
- Managing multiple Google Cloud APIs in a single project
- Securing API keys with environment variables across local and cloud environments
- Deploying a full-stack React app on Vercel with CI/CD

---



---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">


</div>



