import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });


import express from "express";
import mongoose from "mongoose";

import heroRoutes from "./routers/Hero.routes.js";



const app = express();
const PORT = process.env.PORT || 4500;
const MONGO = process.env.MONGO;

app.use(express.json());

// Use your routes here
app.use("/heroes", heroRoutes);




const Server = async () => {
    try {
        await mongoose.connect(MONGO);
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server run on PORT http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

Server();
