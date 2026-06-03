import { usePlacePhoto } from '@/hooks/usePlacePhoto';
import React from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({item, location}) {
    const { alt, emergencyFallbackUrl, fallbackUrl, photoUrl } = usePlacePhoto({
      name: item?.hotelName,
      address: item?.hotelAddress,
      location,
      details: item?.description,
      providedUrl: item?.hotelImageUrl,
      type: 'hotel',
      width: 900,
      height: 600,
    });

  return (
    <div>
      <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName+ "," +item?.hotelAddress} target='_blank'>
                    <div className='hover:scale-105 transition-all cursor-pointer'>
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
