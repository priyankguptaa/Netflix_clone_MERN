import express from "express";
import {authCheck, logout, signin, signup} from "../controllers/auth.controllers.js"
import {protectRoute} from "../middlewares/protectRoutes.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/logout", logout)

router.get("/authCheck", protectRoute, authCheck)
export default router;

