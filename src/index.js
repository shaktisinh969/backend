import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });






const startApp = async () => {
  try {
    await connectDB();
    console.log("Server startup complete.");
  } catch (error) {
    console.error(
      "Server startup failed. Check MongoDB URI, Atlas network access, and SSL settings."
    );
  }
};

startApp()
/*
import express from "express";
;( async() =>{
    try{
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error", (err) => {
           console.error("Error connecting to MongoDB:", err);
       });
       app.listen(process.env.PORT, () => {
           console.log(`Server is running on port ${process.env.PORT}`);
       });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Rethrow the error to be caught by the outer catch block
    }
})() //this call ifiy    */