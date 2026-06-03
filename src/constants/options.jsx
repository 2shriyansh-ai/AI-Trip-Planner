export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:"Stay conscious of costs",
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:"Keep cost on the average side",
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:"Don't worry about cost",
        icon:'💎',
    },
]

export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc:"A sole traveles",
        icon:'🙋🏾‍♀️',
        people:'1',
    },
    {
        id:2,
        title:'A couple',
        desc:"Two travelers",
        icon:'👫🏾',
        people:'2',
    },
    {
        id:3,
        title:'Family',
        desc:"A group of fun loving adv",
        icon:'🏡',
        people:'3 to 5 people',
    },
    {
        id:4,
        title:'Friends',
        desc:"A bunch of thrill-seekers",
        icon:'👩‍👩‍👦‍👦',
        people:'5 to 12 people',
    },
]


export const AI_PROMPT='Generate a realistic travel plan for Location: {location} for {totalDays} days for {traveler} with a {budget} budget. Return only valid JSON with hotelOptions and itinerary arrays. Use only real, existing hotels and real, existing tourist places, neighborhoods, markets, museums, beaches, parks, monuments, restaurants, or viewpoints in or very near the destination. Do not use placeholder names, generic names, "highlight", "evening walk", "place 1", "attraction 1", or numbered fake locations. Include hotelName, hotelAddress, price, hotelImageUrl, geoCoordinates, rating, and description for hotels. Include placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, rating, and time for each itinerary place. Image URLs must be real-life photographic images related to the exact hotel, place, city, or country. Do not return animated images, GIFs, illustrations, cartoons, logos, SVGs, placeholder images, or generic travel graphics. If you are not confident about a real image URL, return an empty string for the image URL so the app can choose a real destination photo fallback. Make placeDetails specific to that exact real place. Create the itinerary for exactly {totalDays} days.'
