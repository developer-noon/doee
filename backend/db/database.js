import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not set");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
