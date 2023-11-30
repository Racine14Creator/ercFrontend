import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });


import express from "express";
import mongoose from "mongoose";

import heroRoutes from "./routers/Hero.routes.js";

import multer from 'multer';
import cloudinary from 'cloudinary';

const app = express();
const PORT = process.env.PORT || 4500;
const MONGO = process.env.MONGO;

app.use(express.json());

const upload = multer();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || 'duetomqjz',
    api_key: process.env.CLOUDINARY_API_KEY || "678377753892168",
    api_secret: process.env.CLOUDINARY_API_SECRET || "9YOIvJmJPV23Ji17dCM3on1-RUI",
});

// Use your routes here
app.use("/heroes", heroRoutes);

app.post('/creator', upload.single('img'), async (req, res) => {
    try {
        // Access the file from req.file
        const file = req.file;

        // Upload file to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(file.buffer.toString('base64'), {
            folder: 'heroes',
        });

        // Access other form data from req.body
        const { name, title, paragraph } = req.body;

        const newHero = new Hero({
            name,
            title,
            paragraph,
            img: cloudinaryResponse.secure_url,
        });

        // Save the new hero to MongoDB
        const savedHero = await newHero.save();

        // Send a response back to the client
        res.json({ data: savedHero });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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
