import express from "express";
import { getSearchHistory, removeItemFromSearchHistory, searchMovieName} from "../controllers/search.controllers.js";

const router = express.Router()

router.get("/:title", searchMovieName)

router.get("/all/history", getSearchHistory)

router.delete("/history/:id", removeItemFromSearchHistory)

export default router;