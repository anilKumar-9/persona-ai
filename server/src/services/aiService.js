import ai from "../config/openai.js";
import prompts from "../prompts/index.js";

export async function generateResponseStream(persona, message) {
  if (!persona || typeof persona !== "string") {
    throw new Error("Persona is required");
  }

  if (!message || typeof message !== "string") {
    throw new Error("Message is required");
  }

  const systemPrompt = prompts[persona];

  if (!systemPrompt) {
    throw new Error(`Unknown persona: ${persona}`);
  }

  const finalPrompt = `
${systemPrompt}

--------------------

User:
${message}
`;

  const response = await ai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
    temperature: 0.7,
  });

  return response.choices?.[0]?.message?.content || "";
}
