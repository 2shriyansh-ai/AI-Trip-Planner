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

const curatedDestinationPhotos = [
  {
    match: ['goa', 'panaji', 'baga', 'calangute', 'anjuna', 'palolem'],
    city: 'Goa, India',
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['india', 'delhi', 'new delhi', 'agra', 'taj mahal'],
    city: 'India',
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['mumbai', 'bombay'],
    city: 'Mumbai, India',
    url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['kerala', 'munnar', 'alleppey', 'alappuzha', 'kochi'],
    city: 'Kerala, India',
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['jaipur', 'rajasthan', 'udaipur', 'jodhpur'],
    city: 'Rajasthan, India',
    url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['kashmir', 'srinagar', 'gulmarg', 'ladakh', 'leh'],
    city: 'Kashmir and Ladakh, India',
    url: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['china'],
    city: 'China',
    url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['hyderabad'],
    city: 'Hyderabad, India',
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['japan', 'tokyo', 'kyoto', 'osaka'],
    city: 'Japan',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['france', 'paris'],
    city: 'Paris, France',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['italy', 'rome', 'venice', 'amalfi', 'florence'],
    city: 'Italy',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['greece', 'santorini', 'athens', 'mykonos'],
    city: 'Greece',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['indonesia', 'bali'],
    city: 'Bali, Indonesia',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['thailand', 'bangkok', 'phuket', 'krabi'],
    city: 'Thailand',
    url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['dubai', 'uae', 'united arab emirates'],
    city: 'Dubai, UAE',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['united states', 'usa', 'new york', 'san francisco', 'los angeles'],
    city: 'United States',
    url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['london', 'england', 'uk', 'united kingdom'],
    city: 'London, United Kingdom',
    url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80',
  },
  {
    match: ['australia', 'sydney', 'melbourne'],
    city: 'Australia',
    url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80',
  },
];

const getCuratedDestinationPhoto = (seed) => {
  const text = String(seed || '').toLowerCase();

  return curatedDestinationPhotos.find((photo) => (
    photo.match.some((item) => text.includes(item))
  ));
};

const getStableLock = (value) => {
  const text = String(value || 'smarttrip').toLowerCase();
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
  }

  return Math.abs(hash) % 100000;
};

const genericTagsByType = {
  destination: ['city', 'skyline', 'landmark', 'travel'],
  hotel: ['hotel', 'lobby', 'room', 'travel'],
  place: ['tourist', 'attraction', 'landmark', 'travel'],
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

  return [...new Set([...locationTags.split(',').filter(Boolean), ...genericTags])].slice(0, 6).join(',');
};

export const getDynamicDestinationPhoto = (seed = '', width = 1200, height = 800, type = 'destination') => {
  const tags = getSearchTags(seed, type);
  const lock = getStableLock(`${type}:${seed}`);

  return {
    city: String(seed || 'Travel destination').trim(),
    url: `https://loremflickr.com/${width}/${height}/${encodeURIComponent(tags)}?lock=${lock}`,
  };
};

export const getDestinationPhoto = (seed = '', width = 1200, height = 800, type = 'destination') => {
  const text = String(seed).trim();

  if (!text) {
    return travelPhotos[0];
  }

  const curatedPhoto = getCuratedDestinationPhoto(text);

  if (curatedPhoto) {
    return curatedPhoto;
  }

  return getDynamicDestinationPhoto(text, width, height, type);
};
