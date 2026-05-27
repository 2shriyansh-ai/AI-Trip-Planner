const getPromptValue = (prompt, pattern, fallback) => {
  return prompt.match(pattern)?.[1]?.trim() || fallback;
};

const normalizeLocation = (location) => {
  return String(location || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const destinationGuides = [
  {
    match: ['hyderabad', 'hyderabad india'],
    hotels: [
      ['Taj Deccan', 'Road No. 1, Banjara Hills, Hyderabad'],
      ['The Park Hyderabad', 'Raj Bhavan Road, Somajiguda, Hyderabad'],
      ['Novotel Hyderabad Convention Centre', 'HITEC City, Hyderabad'],
    ],
    places: [
      ['Charminar', "Visit Hyderabad's iconic 16th-century monument and explore the surrounding Old City lanes.", 'Paid entry for monument areas', 'Morning'],
      ['Chowmahalla Palace', 'Walk through the restored Nizam-era palace complex, courtyards, halls, and vintage collections.', 'Paid entry', 'Afternoon'],
      ['Golconda Fort', 'Explore the historic fort, viewpoints, gateways, and acoustic architecture.', 'Paid entry', 'Morning'],
      ['Qutb Shahi Tombs', 'See the domed royal tombs and landscaped heritage complex near Golconda.', 'Paid entry', 'Afternoon'],
      ['Salar Jung Museum', "Browse one of India's major art and antiquities collections.", 'Paid entry', 'Morning'],
      ['Laad Bazaar', 'Shop for bangles, pearls, street snacks, and Old City souvenirs near Charminar.', 'Free entry', 'Evening'],
      ['Hussain Sagar Lake', 'Enjoy lake views, Lumbini Park, and the Buddha statue area.', 'Free or low cost', 'Evening'],
      ['Shilparamam', 'Visit the arts-and-crafts village for local shopping, food, and cultural stalls.', 'Paid entry', 'Evening'],
      ['Durgam Cheruvu', 'Relax around the lakefront, cable bridge views, and nearby cafes.', 'Free entry', 'Evening'],
      ['Ramoji Film City', 'Spend the day touring film sets, themed attractions, and shows.', 'Paid entry', 'Full day'],
    ],
  },
  {
    match: ['goa', 'goa india'],
    hotels: [
      ['BloomSuites Calangute', 'Calangute, Goa'],
      ['Taj Cidade de Goa Horizon', 'Dona Paula, Goa'],
      ['Fairfield by Marriott Goa Anjuna', 'Anjuna, Goa'],
    ],
    places: [
      ['Basilica of Bom Jesus', 'Visit the UNESCO-listed church in Old Goa known for its baroque architecture.', 'Free entry', 'Morning'],
      ['Fort Aguada', 'Explore the Portuguese-era fort and sea views near Sinquerim.', 'Free entry', 'Afternoon'],
      ['Baga Beach', "Spend time at one of North Goa's busiest beach stretches with food shacks nearby.", 'Free entry', 'Evening'],
      ['Anjuna Flea Market', 'Browse clothes, crafts, jewelry, and local stalls near Anjuna Beach.', 'Free entry', 'Evening'],
      ['Dudhsagar Falls', "Take a day trip to Goa's famous waterfall and forested surroundings.", 'Tour cost varies', 'Full day'],
      ['Fontainhas', "Walk through Panaji's colorful Latin Quarter and heritage lanes.", 'Free entry', 'Morning'],
    ],
  },
  {
    match: ['paris', 'paris france'],
    hotels: [
      ['Hotel Malte Astotel', 'Rue de Richelieu, Paris'],
      ['Hotel Le Six', 'Rue Stanislas, Paris'],
      ['Novotel Paris Centre Tour Eiffel', 'Quai de Grenelle, Paris'],
    ],
    places: [
      ['Eiffel Tower', "Visit the city's most recognizable landmark and enjoy views from the Champ de Mars area.", 'Paid entry for tower access', 'Morning'],
      ['Louvre Museum', 'Explore major art collections including ancient, Renaissance, and French works.', 'Paid entry', 'Afternoon'],
      ['Montmartre', "Walk through hilltop lanes, artists' squares, and the Sacre-Coeur area.", 'Free entry', 'Evening'],
      ['Seine River', 'Take a riverside walk or cruise past bridges and central Paris landmarks.', 'Free or cruise ticket', 'Evening'],
      ['Notre-Dame Cathedral', 'See the restored cathedral exterior and the historic Ile de la Cite area.', 'Free entry', 'Morning'],
      ['Luxembourg Gardens', "Relax in one of Paris's classic public gardens.", 'Free entry', 'Afternoon'],
    ],
  },
];

const genericPlaces = (location) => [
  [`Historic Centre of ${location}`, `Explore the main heritage area, architecture, local cafes, and central streets of ${location}.`, 'Check locally', 'Morning'],
  [`Main Market of ${location}`, 'Visit a popular shopping and food district to try local snacks and browse souvenirs.', 'Free entry', 'Afternoon'],
  [`City Museum of ${location}`, "Spend time at a local museum or cultural centre to understand the city's history.", 'Check locally', 'Morning'],
  [`Waterfront or Viewpoint in ${location}`, 'Choose a well-rated viewpoint, lakefront, riverfront, or promenade for sunset.', 'Free or low cost', 'Evening'],
  [`Old Town Walking Area in ${location}`, 'Walk through a locally recommended historic neighborhood with restaurants nearby.', 'Free entry', 'Evening'],
  [`Public Garden in ${location}`, 'Take a relaxed break in a central park or garden before dinner.', 'Free or low cost', 'Afternoon'],
];

const getGuide = (location) => {
  const normalizedLocation = normalizeLocation(location);
  return destinationGuides.find((guide) => (
    guide.match.some((item) => normalizedLocation.includes(item))
  ));
};

const getDefaultHotels = (location) => [
  [`${location} City Centre Hotel`, `Central district, ${location}`],
  [`${location} Heritage Stay`, `Popular tourist area, ${location}`],
  [`${location} Boutique Inn`, `Near major attractions, ${location}`],
];

export const createDemoTrip = (prompt) => {
  const location = getPromptValue(prompt, /Location:\s*(.*?)\s+for\s+\d+\s+days/i, 'your destination');
  const days = Number(getPromptValue(prompt, /for\s+(\d+)\s+days/i, '3'));
  const budget = getPromptValue(prompt, /with a\s+(.*?)\s+budget/i, 'Moderate');
  const safeDays = Number.isFinite(days) && days > 0 ? Math.min(days, 5) : 3;
  const guide = getGuide(location);
  const hotels = guide?.hotels || getDefaultHotels(location);
  const places = guide?.places || genericPlaces(location);

  return {
    hotelOptions: hotels.slice(0, 3).map(([hotelName, hotelAddress], index) => ({
      hotelName,
      hotelAddress,
      price: `${budget} range`,
      hotelImageUrl: '',
      geoCoordinates: '',
      rating: String(4.1 + (index % 3) / 10),
      description: `A ${budget.toLowerCase()} stay option with convenient access to major sights in ${location}.`,
    })),
    itinerary: Array.from({ length: safeDays }, (_, dayIndex) => {
      const firstPlace = places[(dayIndex * 2) % places.length];
      const secondPlace = places[(dayIndex * 2 + 1) % places.length];

      return {
        day: dayIndex + 1,
        plan: [firstPlace, secondPlace].map(([placeName, placeDetails, ticketPricing, time], placeIndex) => ({
          placeName,
          placeDetails,
          placeImageUrl: '',
          geoCoordinates: '',
          ticketPricing,
          rating: String(4.2 + ((dayIndex + placeIndex) % 4) / 10),
          time,
        })),
      };
    }),
  };
};

const hasPlaceholderName = (name = '') => {
  return /\b(highlight|evening walk|place\s*\d+|attraction\s*\d+)\b/i.test(String(name));
};

const hasPlaceholderHotelName = (name = '') => {
  return /\b(central stay|comfort inn|city centre hotel|heritage stay|boutique inn)\b/i.test(String(name));
};

export const repairPlaceholderTrip = (trip) => {
  const location = trip?.userSelection?.location;
  const totalDays = trip?.userSelection?.totalDays || trip?.tripData?.itinerary?.length || 3;
  const traveler = trip?.userSelection?.traveler || 'travelers';
  const budget = trip?.userSelection?.budget || 'Moderate';

  if (!trip?.tripData || !location) {
    return trip;
  }

  const repairedTripData = createDemoTrip(
    `Generate a realistic travel plan for Location: ${location} for ${totalDays} days for ${traveler} with a ${budget} budget.`
  );
  const needsHotelRepair = trip.tripData.hotelOptions?.some((hotel) => (
    hasPlaceholderHotelName(hotel?.hotelName)
  ));
  const needsPlaceRepair = trip.tripData.itinerary?.some((day) => (
    day?.plan?.some((place) => hasPlaceholderName(place?.placeName))
  ));

  if (!needsHotelRepair && !needsPlaceRepair) {
    return trip;
  }

  return {
    ...trip,
    tripData: {
      ...trip.tripData,
      hotelOptions: needsHotelRepair ? repairedTripData.hotelOptions : trip.tripData.hotelOptions,
      itinerary: needsPlaceRepair ? repairedTripData.itinerary : trip.tripData.itinerary,
    },
  };
};
