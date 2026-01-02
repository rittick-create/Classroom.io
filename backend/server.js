import dotenv from "dotenv"
dotenv.config();
import express from "express"

import connectToDatabase from "./config/db.js";
const PORT = process.env.PORT || 3000;
const app = express();
console.log("server is starting ....")
app.use(express.json());
app.listen(PORT,()=>{
  console.log(`server is listening onb port{PORT}`)
})