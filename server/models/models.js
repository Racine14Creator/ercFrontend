import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Hero = mongoose.model("Hero", heroSchema);

export default Hero;
