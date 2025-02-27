import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { Task } from './Components/Task'
import Project from './Components/Project'
import Contact from './Components/Contact'
export default function App() {
  return (
  <>

    

  <div className=' bg-gray-900 p-1 text-white'>
  <Navbar />
  <About/>
  <Task />
  <Project />
  <Contact/>
</div>
</>
  )
}
