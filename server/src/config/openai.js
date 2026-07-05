import OpenAI from "openai";
import "dotenv/config";

const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not configured");
}

const ai = new OpenAI({
  apiKey,
});

export default ai;
