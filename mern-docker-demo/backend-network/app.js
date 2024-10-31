import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import bodyParser from "body-parser"
import goalRoutes from "./routes/goalRoutes.js";

// require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Use the CORS middleware for general CORS handling
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true, // Allow credentials (e.g., cookies)
}));

// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



// Routes
app.use('/api/goals', goalRoutes);


// Your MongoDB connection string
const mongoUri = "mongodb://mongodb:27017/goals";
// const mongoUri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongodb:27017/goals?authSource=admin`;
// const mongoUri = "mongodb://localhost:27017/goals";
console.log("hi i am here")
// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoUri);
    console.log("Successfully connected to MongoDB!!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

// Start the server once MongoDB is connected
connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});