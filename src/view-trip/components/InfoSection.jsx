import { usePlacePhoto } from '@/hooks/usePlacePhoto';
import React from 'react'



function InfoSection({trip}) {
  const { alt, emergencyFallbackUrl, fallbackUrl, photoUrl } = usePlacePhoto({
    name: trip?.userSelection?.location,
    location: trip?.userSelection?.location,
    type: 'destination',
    width: 1400,
    height: 800,
  });

  return (
    <div>
      <img
        src={photoUrl}
        alt={alt}
        onError={(event) => {
          if (!event.currentTarget.dataset.triedFallback) {
            event.currentTarget.dataset.triedFallback = 'true';
            event.currentTarget.src = fallbackUrl;
          } else if (!event.currentTarget.dataset.triedEmergencyFallback) {
            event.currentTarget.dataset.triedEmergencyFallback = 'true';
            event.currentTarget.src = emergencyFallbackUrl;
          } else {
            event.currentTarget.onerror = null;
          }
        }}
        className='h-[330px] w-full rounded-xl bg-gray-100 object-cover'
      />
       <div className='flex justify-between items-center'>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-6 mt-4'>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>🗓️ {trip?.userSelection?.totalDays} Day</h2>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>👩‍👧‍👦 Number of Traveler : {trip?.userSelection?.traveler} People</h2>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>💵 {trip?.userSelection?.budget} Budget </h2>
                </div>
            </div>
       </div>
    </div>
  )
}

export default InfoSection
