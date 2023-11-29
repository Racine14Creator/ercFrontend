import express from "express";
import {
    getHeroes,
    getHeroById,
    createHero,
    updateHero,
    deleteHero,
} from "../controllers/Hero/Hero.controller.js";
import { validateHeroId } from "../middlewares/heroValidation.js";

const router = express.Router();

router.route("/").get(getHeroes).post(createHero);

router.route("/:id").get(validateHeroId, getHeroById).put(validateHeroId, updateHero).delete(validateHeroId, deleteHero);


export default router;
