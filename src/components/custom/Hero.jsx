import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Login from "../Login";
import { CalendarDays, MapPin, Plane, Sparkles, WalletCards } from 'lucide-react';
import { travelPhotos } from '@/constants/travelPhotos';

function Hero() {
  const featuredPhoto = travelPhotos[2];

  return (
    <div className="flex flex-col items-center px-5 gap-9">
      <h1
      className="font-extrabold text-4xl md:text-[50px] text-center mt-16 leading-tight">
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> <br></br> Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interests and budget.</p>
        <div className="flex gap-4">
  <Link to={'/create-trip'}>
    <Button>Get Started, It&apos;s Free.</Button>
  </Link>

  <Login />
</div>
        <div className="mt-4 w-full max-w-6xl overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <img src="/logo.svg" alt="SmartTrip AI" className="h-10" />
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="outline" className="rounded-full">Create Trip</Button>
              <Button variant="outline" className="rounded-full">My Trips</Button>
            </div>
          </div>
          <div className="grid gap-6 p-5 md:grid-cols-[1.35fr_0.65fr] md:p-7">
            <div className="relative min-h-[260px] overflow-hidden rounded-lg">
              <img src={featuredPhoto.url} alt={featuredPhoto.city} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  AI generated itinerary
                </div>
                <h2 className="text-2xl font-bold">{featuredPhoto.city}</h2>
                <p className="mt-1 text-sm text-white/85">Hotels, food stops, viewpoints, and day-wise plans in one place.</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-[#f56551]">Trip Snapshot</p>
                <h2 className="mt-2 text-2xl font-bold">Plan smarter with SmartTrip AI</h2>
                <p className="mt-2 text-gray-500">A polished preview of the real product without placeholder logos or old screenshots.</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {travelPhotos.slice(0, 3).map((photo) => (
                  <img
                    key={photo.city}
                    src={photo.url}
                    alt={photo.city}
                    className="h-20 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <MapPin className="h-5 w-5 text-[#f56551]" />
                  <span className="font-medium">Destination matched to your vibe</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <CalendarDays className="h-5 w-5 text-[#f56551]" />
                  <span className="font-medium">Day-wise itinerary builder</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <WalletCards className="h-5 w-5 text-[#f56551]" />
                  <span className="font-medium">Budget-aware recommendations</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[#111827] p-4 text-white">
                <Plane className="h-5 w-5 text-sky-300" />
                <span className="text-sm font-medium">Ready for your next route</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
