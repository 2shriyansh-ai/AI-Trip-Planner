export const travelPhotos = [
  {
    city: 'Santorini, Greece',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80',
  },
  {
    city: 'Kyoto, Japan',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    city: 'Amalfi Coast, Italy',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80',
  },
  {
    city: 'Paris, France',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
  },
  {
    city: 'Swiss Alps',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    city: 'Bali, Indonesia',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80',
  },
];

const getStableLock = (value) => {
  const text = String(value || 'smarttrip').toLowerCase();
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
  }

  return Math.abs(hash) % 100000;
};

const genericTagsByType = {
  destination: ['travel', 'landmark', 'city'],
  hotel: ['hotel', 'resort', 'building'],
  place: ['tourist', 'attraction', 'landmark'],
};

const getSearchTags = (seed, type = 'destination') => {
  const text = String(seed).trim();
  const genericTags = genericTagsByType[type] || genericTagsByType.destination;

  if (!text) {
    return genericTags.join(',');
  }

  const locationTags = text
    .toLowerCase()
    .replace(/[^a-z0-9\s,]/g, ' ')
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(',');

  return [...new Set([...locationTags.split(',').filter(Boolean), ...genericTags])].slice(0, 5).join(',');
};

export const getDynamicDestinationPhoto = (seed = '', width = 1200, height = 800, type = 'destination') => {
  const tags = getSearchTags(seed, type);
  const lock = getStableLock(`${type}:${seed}`);
  const encodedTags = encodeURIComponent(tags).replace(/%2C/g, ',');

  return {
    city: String(seed || 'Travel destination').trim(),
    url: `https://loremflickr.com/${width}/${height}/${encodedTags}?lock=${lock}`,
  };
};

export const getDestinationPhoto = (seed = '', width = 1200, height = 800, type = 'destination') => {
  const text = String(seed).trim();

  if (!text) {
    return travelPhotos[0];
  }

  return getDynamicDestinationPhoto(text, width, height, type);
};
