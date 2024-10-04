import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config(); // use to connect the mongo_url from .env file
export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
        }
}