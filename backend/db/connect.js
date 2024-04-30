import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connected successful");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDb;
