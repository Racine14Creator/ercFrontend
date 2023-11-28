import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config({ path: '.env' })
const app = express(),
    PORT = process.env.PORT || 4500

const Server = () => {
    mongoose.connect(MONGO)
        .then(_ => {
            console.log('Connected to MongoDB')
            app.listen(PORT, (err) => {
                if (err) throw new Error("Failed to run the server")
                console.log(`Ser er run on PORT localhost:${PORT}`)
            })
        })
        .catch(err => console.log(err))
}
Server()