import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[6,"password must be atlesat 6 character"],
    },
    image:{
        type:String,
        default:"",
    },
    searchHistory:{
        type:Array,
        default:[],
    }
},{timestamps:true,})



const User = mongoose.model("User",userSchema)

export default User;