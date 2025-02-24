import express from "express";
import cors from "cors";
import "dotenv/config";

// Initialize express
const app = express();

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => res.send("API WORKING"));

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
