import { generateResponseStream } from "../services/aiService.js";

export async function chat(req, res, next) {
  try {
    const { persona, message } = req.body;

    if (!persona || !message || typeof persona !== "string" || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "persona and message are required",
      });
    }

    const responseText = await generateResponseStream(persona, message);

    res.status(200).json({
      success: true,
      message: responseText.trim(),
    });
  } catch (error) {
    next(error);
  }
}
