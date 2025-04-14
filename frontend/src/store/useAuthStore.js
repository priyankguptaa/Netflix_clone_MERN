import toast from "react-hot-toast";
import {create} from "zustand";
import axios from "axios";

export const useAuthStore = create((set)=>({
    user:null,
    isSigningUp:false,
    isCheckingAuth:true,
    islogingOut:false,
    isSigningIn:false,

    signup: async (formData) => {
        set({isSigningUp:true});
        try {
            const response = await axios.post("/api/v1/auth/signup", formData);
            set({ user:response.data.user, isSigningUp:false})
             toast.success("signup successfull")
        } catch (error) {
            set({isSigningUp:false, user:null})
            toast.error(error.response.data.message || "An error occured")
        }
    },
    signin: async (formData) => {
        set({isSigningIn:true});
        try {
            const response = await axios.post("/api/v1/auth/signin", formData);
            set({ user:response.data.user, isSigningIn:false})
             toast.success("signup successfull")
        } catch (error) {
            set({isSigningIn:false, user:null})
            toast.error(error.response.data.message || "An error occured")
        }
    },    
    logout: async ()=>{
        set({islogingOut:true})
        try {
            await axios.get("/api/v1/auth/logout")
            set({user:null,islogingOut:false})
            toast.success("logout successfully")
        } catch (error) {
            set({islogingOut:false})
            toast.error(error.response.data.message || "an occured during logout")
        }
    },
    authCheck: async ()=>{
        set({isCheckingAuth:true})
        try {
            const response = await axios.get("/api/v1/auth/authCheck")
            set({user:response.data.user, isCheckingAuth:false})
        } catch (error) {
            set({isCheckingAuth:false,user:null})   
        }
    },
}))


export const useContentStore = create((set)=>({
    contentType:"movie",
    setContentType: (type) => set({contentType:type}),
}))