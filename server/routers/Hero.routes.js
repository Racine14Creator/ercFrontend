import express from "express"
import { getHero, getSingleHero } from "../controllers/Hero/Hero.controller"

const router = express.Router()

router.route("/").get(getHero)

router.route("/:id").get(getSingleHero)

export default router