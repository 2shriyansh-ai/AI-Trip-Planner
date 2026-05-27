import { GetPhotoUrl, GetPlaceDetails } from '@/service/GlobalApi';
import { getDestinationPhoto } from '@/constants/travelPhotos';
import React, { useEffect, useState } from 'react'



function InfoSection({trip}) {
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
    <div>
      <img src={photoUrl ? photoUrl : fallbackPhoto.url} alt={trip?.userSelection?.location || fallbackPhoto.city} className='h-[330px] w-full object-cover rounded-xl'/>
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
