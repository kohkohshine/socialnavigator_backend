import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./db/mongooseClient.js"; 
import userRouter from "./routes/userRoutes.js";
import ndRouter from "./routes/ndRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 24601;

// Apply global middleware
app.use(cors({ exposedHeaders: "Authorization" }));
app.use(express.json());

// Define routes
app.use("/users", userRouter);
app.use("/neurodivergent", ndRouter);
app.use("/chat", chatRouter);
app.use("/ai", aiRouter);

// Apply error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});