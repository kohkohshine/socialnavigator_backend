import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./db/mongooseClient.js"; 
import userRoutes from "./routes/userRoutes.js";
import ndRoutes from "./routes/ndRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 24601;

// Apply global middleware
app.use(cors({ exposedHeaders: "Authorization" }));
app.use(express.json());

// Define routes
app.use("/users", userRoutes);
app.use("/neurodivergent", ndRoutes);
app.use("/chat", chatRoutes);
app.use("/ai", aiRoutes);

// Apply error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});