import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    paragraph: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true }
}, { timestamps: true })

export const Subscriber = mongoose.model("Subscriber", subscriberSchema)
export const Hero = mongoose.model("Hero", heroSchema);