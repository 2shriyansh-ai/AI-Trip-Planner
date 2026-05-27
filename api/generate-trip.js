import { GoogleGenerativeAI } from "@google/generative-ai";

const extractJson = (text) => {
  const trimmed = text.trim();
  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const jsonText = fencedMatch?.[1] ?? trimmed;
  return JSON.parse(jsonText);
};

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
        description: `A convenient ${budget.toLowerCase()} hotel option close to popular sights in ${location}.`,
      },
      {
        hotelName: `${location} Comfort Inn`,
        hotelAddress: `Main market, ${location}`,
        price: `${budget} range`,
        hotelImageUrl: "",
        geoCoordinates: "",
        rating: "4.0",
        description: `A practical stay for travelers who want easy access to food, transit, and attractions.`,
      },
    ],
    itinerary: Array.from({ length: safeDays }, (_, index) => ({
      day: index + 1,
      plan: [
        {
          placeName: `${location} highlight ${index + 1}`,
          placeDetails: `Explore a well-known local attraction and nearby food spots in ${location}.`,
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;
  const { prompt } = req.body ?? {};
  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  if (!apiKey) {
    return res.status(200).json({ tripData: createDemoTrip(prompt), demo: true });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
    });

    const result = await model.generateContent(prompt);
    const tripData = extractJson(result.response.text());

    if (!Array.isArray(tripData?.hotelOptions) || !Array.isArray(tripData?.itinerary)) {
      return res.status(502).json({ error: "AI response did not match the expected trip format" });
    }

    return res.status(200).json({ tripData });
  } catch (error) {
    return res.status(500).json({ error: "Failed to generate trip" });
  }
}
