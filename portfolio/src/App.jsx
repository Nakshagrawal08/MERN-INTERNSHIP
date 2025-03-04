import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { Task } from './Components/Task'
import Project from './Components/Project'
import Contact from './Components/Contact'
import { Outlet } from 'react-router'
import Bg from './Components/Bg' 
export default function App() {
  return (
  <><Navbar />
<Bg/>
  <Outlet/>

</>
  )
}
