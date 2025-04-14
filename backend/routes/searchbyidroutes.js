import express from "express";
import { searchById } from "../controllers/searchbyid.controller.js";


const router = express.Router()

router.get("/:id", searchById )

export default router;
