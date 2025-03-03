import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { Task } from './Components/Task'
import Project from './Components/Project'
import Contact from './Components/Contact'
import { Outlet } from 'react-router'
import BG from './pictures/bg.jpg'
export default function App() {
  return (
  <><Navbar />
  <div className="bg-[URL('./pictures/bg.jpg')] bg-cover h-screen">
    <div className="my-56 text-3xl text-center animate-pulse flex-row py-4  bg-black/50 ">
        <p>Frontend Designer</p>
        <h1 className="mt-5">Hi. I am <span className="text-blue-400 italic font-bold">Nakshatra Agrawal</span><br/> from Khandwa</h1>
    </div>
  </div>
  
  <Outlet/>

</>
  )
}
