import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    title: { type: String, required: true, }
}, { timestamps: true })