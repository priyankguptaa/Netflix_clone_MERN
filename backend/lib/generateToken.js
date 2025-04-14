import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

    export const generateTokenAndCookie = (userId, res)=>{
    const token = jsonwebtoken.sign({userId}, process.env.SECRET_REFRESH_TOKEN,{expiresIn:"15d"});

    res.cookie("jwt-netflix", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
    return token;
    };

    





