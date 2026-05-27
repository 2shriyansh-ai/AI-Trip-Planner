import { GoogleGenerativeAI } from "@google/generative-ai";
import { createDemoTrip } from "../src/service/createDemoTrip.js";

const extractJson = (text) => {
  const trimmed = text.trim();
  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const jsonText = fencedMatch?.[1] ?? trimmed;
  return JSON.parse(jsonText);
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
