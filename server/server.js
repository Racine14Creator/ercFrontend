import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: ".env" });
import path from "path"
import express from "express";
import mongoose from "mongoose";
import heroRoutes from "./routers/Hero.routes.js";
import multer from 'multer';
import routerSubscriber from "./routers/subscriber.routes.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 4500;
const MONGO = process.env.MONGO;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "30mb" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        console.log(file);
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage
});


// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME || 'duetomqjz',
//     api_key: process.env.CLOUDINARY_API_KEY || "678377753892168",
//     api_secret: process.env.CLOUDINARY_API_SECRET || "9YOIvJmJPV23Ji17dCM3on1-RUI",
// });

app.use('/subscriber', routerSubscriber)
// Use your routes here
app.use("/heroes", heroRoutes);

app.post("/heroes", upload.single('image'), async (req, res) => {

    const { name, title, paragraph } = req.body
    console.log(req.file.path);

    const image = req.file.filename;

    const newHero = new Hero({
        name, title, paragraph, image
    })
    await newHero.save()
        .then(doc => res.json(doc))
        .catch(error => console.log(error))
})

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
