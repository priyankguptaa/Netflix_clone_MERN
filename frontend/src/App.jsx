import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/SearchPage.jsx";
import SearchHistoryPage from "./pages/SearchHistoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import WatchPage from "./pages/WatchPage.jsx";

function App() {
    const {user, isCheckingAuth, authCheck} = useAuthStore();

    useEffect(()=>{
      authCheck()
    },[authCheck])

    if(isCheckingAuth){
      return(
        <div className="h-screen">
          <div className="flex flex-justify items-center bg-black h-full w-full">
            <Loader className="animate-spin text-red-600 size-10"/>
          </div>
        </div>
      )
    }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={!user?<SignUpPage/> : <Navigate to={"/"}/>}/>
        <Route path="/signin" element={!user?<SignInPage/> : <Navigate to={"/"}/>}/>
        <Route path="/watch/:id" element={user?<WatchPage/> : <Navigate to={"/signin"}/>}/>
        <Route path="/search" element={user? <SearchPage/> : <Navigate to={"/signin"}/>}/>
        <Route path="/history" element={user? <SearchHistoryPage/> : <Navigate to={"/signin"}/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App;
