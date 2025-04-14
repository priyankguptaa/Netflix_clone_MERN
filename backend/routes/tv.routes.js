import express from "express";
import { getPopularTv, getTvByCategory} from "../controllers/tv.controllers.js";

const router = express.Router()

router.get("/popular", getPopularTv)
// router.get("/:id/trailer", getTvTrailers)
// router.get("/:id/details", getTvdetails)
// router.get("/:id/similar", getTvMovie)
router.get("/:category", getTvByCategory)

export default router;