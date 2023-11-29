
import Hero from "../../models/models.js";
import * as dotenv from "dotenv"

dotenv.config({ path: `../../.env` });

import cloudinary from "cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || 'duetomqjz',
    api_key: process.env.CLOUDINARY_API_KEY || "678377753892168",
    api_secret: process.env.CLOUDINARY_API_SECRET || "9YOIvJmJPV23Ji17dCM3on1-RUI",
});
// console.log("Cloudinary Config:", cloudinary.config());

const getHeroes = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json({ data: heroes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getHeroById = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (!hero) {
            return res.status(404).json({ error: "Hero not found" });
        }
        res.json({ data: hero });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createHero = async (req, res) => {
    try {
        const { name, title, paragraph, img } = req.body;

        // Upload image to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(img, {
            folder: "heroes", // Optional folder in Cloudinary
        });

        const newHero = new Hero({
            name,
            title,
            paragraph,
            img: cloudinaryResponse.secure_url,
        });

        const savedHero = await newHero.save();
        res.json({ data: savedHero });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateHero = async (req, res) => {
    try {
        const { name, title, paragraph, img } = req.body;

        // Update image on Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(img, {
            folder: "heroes",
        });

        const updatedHero = await Hero.findByIdAndUpdate(
            req.params.id,
            {
                name,
                title,
                paragraph,
                img: cloudinaryResponse.secure_url,
            },
            { new: true }
        );

        if (!updatedHero) {
            return res.status(404).json({ error: "Hero not found" });
        }

        res.json({ data: updatedHero });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteHero = async (req, res) => {
    try {
        const deletedHero = await Hero.findByIdAndDelete(req.params.id);
        if (!deletedHero) {
            return res.status(404).json({ error: "Hero not found" });
        }
        res.json({ data: deletedHero });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { getHeroes, getHeroById, createHero, updateHero, deleteHero };