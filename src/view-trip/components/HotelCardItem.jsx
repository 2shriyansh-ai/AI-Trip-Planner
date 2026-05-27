import { GetPhotoUrl, GetPlaceDetails } from '@/service/GlobalApi';
import { getDestinationPhoto } from '@/constants/travelPhotos';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({item}) {
    const [photoUrl,setPhotoUrl] = useState();
    const fallbackPhoto = getDestinationPhoto(item?.hotelName || item?.hotelAddress);

    useEffect(()=>{
      item&&GetPlaceImg();
    },[item])
  
    const GetPlaceImg=async()=>{ 
      const data={
        textQuery:item?.hotelName
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
      <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName+ "," +item?.hotelAddress} target='_blank'>
                    <div className='hover:scale-105 transition-all cursor-pointer'>
                        <img
                            src={photoUrl ? photoUrl : fallbackPhoto.url}
                            alt={item?.hotelName || fallbackPhoto.city}
                            onError={(event) => { event.currentTarget.src = '/road-trip-vacation.jpg' }}
                            className='rounded-xl h-[180px] w-full object-cover'
                        />
                        <div className='my-3 py-2'>
                            <h2 className='font-medium'>{item?.hotelName}</h2>
                            <h2 className='text-xs text-gray-500'>📍{item?.hotelAddress} </h2>
                            <h2 className='text-sm'>💰{item?.price}</h2>
                            <h2 className='text-sm'>⭐{item?.rating} </h2>
                        </div>
                    </div>
        </Link>    
    </div>
  )
}

export default HotelCardItem
