import { useEffect, useMemo, useState } from 'react';
import { getDestinationPhoto } from '@/constants/travelPhotos';
import { GetPhotoUrl, GetPlaceDetails } from '@/service/GlobalApi';

const isUsableImageUrl = (url) => {
  const value = String(url || '').trim();

  if (!/^https?:\/\//i.test(value)) {
    return false;
  }

  return !/\.(gif|svg)(\?|#|$)/i.test(value)
    && !/(giphy|tenor|lottie|animation|cartoon|placeholder|road-trip-vacation)/i.test(value);
};

const compactParts = (parts) => (
  parts
    .map((part) => String(part || '').trim())
    .filter(Boolean)
    .filter((part, index, values) => values.indexOf(part) === index)
);

export const buildPhotoSearchText = ({ name, address, location, details, type = 'destination' }) => {
  const typeHint = type === 'hotel' ? 'hotel' : type === 'place' ? 'tourist attraction' : 'travel destination';

  return compactParts([name, address, location, details, typeHint]).join(', ');
};

export const usePlacePhoto = ({
  name,
  address,
  location,
  details,
  providedUrl,
  type = 'destination',
  width = 1200,
  height = 800,
}) => {
  const preferredUrl = isUsableImageUrl(providedUrl) ? providedUrl.trim() : null;
  const searchText = useMemo(
    () => buildPhotoSearchText({ name, address, location, details, type }),
    [address, details, location, name, type]
  );
  const fallbackSeed = useMemo(
    () => compactParts([name, address, location, type]).join(', '),
    [address, location, name, type]
  );
  const fallbackPhoto = useMemo(
    () => getDestinationPhoto(fallbackSeed || searchText, width, height, type),
    [fallbackSeed, height, searchText, type, width]
  );
  const [placesPhotoUrl, setPlacesPhotoUrl] = useState(null);

  useEffect(() => {
    let ignore = false;

    if (preferredUrl || !searchText) {
      setPlacesPhotoUrl(null);
      return () => {
        ignore = true;
      };
    }

    const loadPhoto = async () => {
      try {
        const response = await GetPlaceDetails({ textQuery: searchText });
        const googlePhotoUrl = GetPhotoUrl(response);

        if (!ignore) {
          setPlacesPhotoUrl(googlePhotoUrl);
        }
      } catch (error) {
        if (!ignore) {
          setPlacesPhotoUrl(null);
        }
      }
    };

    loadPhoto();

    return () => {
      ignore = true;
    };
  }, [preferredUrl, searchText]);

  return {
    alt: name || location || fallbackPhoto.city,
    fallbackUrl: fallbackPhoto.url,
    photoUrl: preferredUrl || placesPhotoUrl || fallbackPhoto.url,
  };
};
