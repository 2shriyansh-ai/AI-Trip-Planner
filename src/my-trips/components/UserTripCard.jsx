import { usePlacePhoto } from '@/hooks/usePlacePhoto';
import React from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {
  const { alt, emergencyFallbackUrl, fallbackUrl, photoUrl } = usePlacePhoto({
    name: trip?.userSelection?.location,
    location: trip?.userSelection?.location,
    type: 'destination',
    width: 900,
    height: 600,
  });

  return (
   <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all hover:shadow-sm'>
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
      className='rounded-xl h-[200px] w-full object-cover'
     />
      <div>
      <h2 className='font-medium text-lg'>{trip?.userSelection?.location}</h2>
      <h2 className="text-sm text-gray-600" >{trip?.userSelection?.totalDays} Days trip with {trip?.userSelection?.budget} </h2>
      </div>
    </div>
   </Link>
  )
}

export default UserTripCard
