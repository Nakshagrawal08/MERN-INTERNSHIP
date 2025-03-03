import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {BrowserRouter} from 'react-router'
import { Route,BrowserRouter,Routes } from 'react-router'
import About from './Components/About.jsx'
import { Task } from './Components/Task.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} >
          <Route path='about' element={<About/>}/>
          <Route path='tasks' element={<Task/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
