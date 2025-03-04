import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import { Task } from './Components/Task/Task'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import { Outlet } from 'react-router'
import Bg from './Components/Bg' 
export default function App() {
  return (
  <>
  <Navbar />

  <Outlet/>

</>
  )
}
