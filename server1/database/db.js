import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const Connection=async()=>{
    const URL=process.env.URL;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database",error.message);
    }
}
export default Connection;