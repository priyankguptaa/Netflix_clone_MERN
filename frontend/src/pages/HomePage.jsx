import React from 'react'
import HomeScreen from '../components/HomeScreen.jsx'
import AuthScreen from '../components/AuthScreen.jsx'
import { useAuthStore } from '../store/useAuthStore.js';

function HomePage() {
  const {user} = useAuthStore();

  return (
    <div>
    {user ? <HomeScreen/>:<AuthScreen/>}
    </div>
  )
}

export default HomePage
