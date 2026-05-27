import axios from "axios";

const getPromptValue = (prompt, pattern, fallback) => {
  return prompt.match(pattern)?.[1]?.trim() || fallback;
};

const createDemoTrip = (prompt) => {
  const location = getPromptValue(prompt, /Location:\s*(.*?)\s+for\s+\d+\s+days/i, "your destination");
  const days = Number(getPromptValue(prompt, /for\s+(\d+)\s+days/i, "3"));
  const budget = getPromptValue(prompt, /with a\s+(.*?)\s+budget/i, "Moderate");
  const safeDays = Number.isFinite(days) && days > 0 ? Math.min(days, 5) : 3;

  return {
    hotelOptions: [
      {
        hotelName: `${location} Central Stay`,
        hotelAddress: `Central area, ${location}`,
        price: `${budget} range`,
        hotelImageUrl: "",
        geoCoordinates: "",
        rating: "4.2",
        description: `A convenient hotel option close to popular sights in ${location}.`,
      },
      {
        hotelName: `${location} Comfort Inn`,
        hotelAddress: `Main market, ${location}`,
        price: `${budget} range`,
        hotelImageUrl: "",
        geoCoordinates: "",
        rating: "4.0",
        description: "A practical stay with easy access to food, transit, and attractions.",
      },
    ],
    itinerary: Array.from({ length: safeDays }, (_, index) => ({
      day: index + 1,
      plan: [
        {
          placeName: `${location} highlight ${index + 1}`,
          placeDetails: `Explore a popular local attraction and nearby food spots in ${location}.`,
          placeImageUrl: "",
          geoCoordinates: "",
          ticketPricing: "Check locally",
          rating: "4.3",
          time: "Morning to afternoon",
        },
        {
          placeName: `${location} evening walk ${index + 1}`,
          placeDetails: `Spend the evening in a scenic or popular local area suited to your ${budget.toLowerCase()} budget.`,
          placeImageUrl: "",
          geoCoordinates: "",
          ticketPricing: "Free or low cost",
          rating: "4.1",
          time: "Evening",
        },
      ],
    })),
  };
};

export const generateTrip = async (prompt) => {
  try {
    const response = await axios.post("/api/generate-trip", { prompt });
    return response.data.tripData;
  } catch (error) {
    return createDemoTrip(prompt);
  }
};
