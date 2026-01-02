import mongoose from "mongoose";
const connectToDatabase = async()=>{
    try{
        await moongose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }catch(error){
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
}
export default connectToDatabase;