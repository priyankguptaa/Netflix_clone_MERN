import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import tvRoutes from "./routes/tv.routes.js";
import searchRoutes from "./routes/search.routes.js";
import searchByIdRoutes from "./routes/searchbyidroutes.js";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middlewares/protectRoutes.js";


dotenv.config();

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", protectRoute, movieRoutes)
app.use("/api/v1/tv", protectRoute, tvRoutes)
app.use("/api/v1/search", protectRoute, searchRoutes)

app.use("/api/v1/searchbyid", protectRoute, searchByIdRoutes)



app.listen(5000,()=>{
    console.log(`server is running at ${process.env.PORT}`)
    connectDB()
})