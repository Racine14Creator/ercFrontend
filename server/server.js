import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config({ path: '.env' })

const app = express(),
    MONGO = process.env.MONGO,
    PORT = process.env.PORT || 4500

const Server = () => {
    mongoose.connect(MONGO)
        .then(_ => {
            console.log('Connected to MongoDB')
            app.listen(PORT, (err) => {
                if (err) throw new Error("Failed to run the server")
                console.log(`Server run on PORT http://localhost:${PORT}`)
            })
        })
        .catch(err => console.log(err))
}
Server()