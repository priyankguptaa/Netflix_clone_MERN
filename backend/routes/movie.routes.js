import express from "express";
import { getMoviesByCategory, getPopularMovies} from "../controllers/movies.controllers.js";

const router = express.Router()

router.get("/popular", getPopularMovies)
router.get("/:category", getMoviesByCategory)


export default router;