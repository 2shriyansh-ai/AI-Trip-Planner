import { GetPhotoUrl, GetPlaceDetails } from '@/service/GlobalApi';
import { getDestinationPhoto } from '@/constants/travelPhotos';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {
  const [photoUrl,setPhotoUrl] = useState();
  const fallbackPhoto = getDestinationPhoto(trip?.userSelection?.location);

  useEffect(()=>{
    trip&&GetPlaceImg();
  },[trip])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:trip?.userSelection?.location
    }
    try {
      const resp= await GetPlaceDetails(data);
      setPhotoUrl(GetPhotoUrl(resp));
    } catch (error) {
      setPhotoUrl(null);
    }
  }
  return (
   <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all hover:shadow-sm'>
     <img
      src={photoUrl ? photoUrl : fallbackPhoto.url}
      alt={trip?.userSelection?.location || fallbackPhoto.city}
      onError={(event) => { event.currentTarget.src = '/road-trip-vacation.jpg' }}
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
