import React from 'react'
import About from './About/About'
import { Task } from './Task/Task'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Bg from './Bg'

function Home() {
  return (
    <>
    <Bg/>
    <About />
    <Task />
    <Project/>
    <Contact/>
    </>
  )
}

export default Home
