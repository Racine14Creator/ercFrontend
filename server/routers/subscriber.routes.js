import express from "express"
import {
    deleteOne,
    getAll,
    getOne,
    post,
    update
} from "../controllers/subscriber.controller.js"

const router = express.Router()

router.route('/').get(getAll).post(post)
router.route('/:id').get(getOne).put(update).delete(deleteOne)

export default router