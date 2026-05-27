import axios from "axios";
import { createDemoTrip } from "./createDemoTrip";

export const generateTrip = async (prompt) => {
  try {
    const response = await axios.post("/api/generate-trip", { prompt });
    return response.data.tripData;
  } catch (error) {
    return createDemoTrip(prompt);
  }
};
