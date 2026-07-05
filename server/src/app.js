import express from "express";
import cors from "cors";

import chatRoutes from "./routes/ChatRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import "dotenv/config"

const app = express();

/* -----------------------------
   Global Middleware
------------------------------ */

// Enable CORS
app.use(cors({
   origin:process.env.ORIGIN
}));

// Parse JSON Request Body
app.use(express.json());

/* -----------------------------
   Health Check
------------------------------ */

app.get("/", (req, res) => {
   res.json({
      success: true,
      message: "AI Persona API is running 🚀",
   });
});

/* -----------------------------
   Routes
------------------------------ */

app.use("/api/chat", chatRoutes);

/* -----------------------------
   404 Handler
------------------------------ */

app.use((req, res) => {
   res.status(404).json({
      success: false,
      message: "Route not found",
   });
});

/* -----------------------------
   Global Error Handler
------------------------------ */

app.use(errorHandler);

export default app;
