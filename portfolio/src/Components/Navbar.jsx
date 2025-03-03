import React from 'react'
import { NavLink } from 'react-router'
//import Bg from './src/pictures/bg.jpg'
function Navbar() {

  return (
  <>
        
            <div className="mt-2 px-4 lg:px-16" id="div">
                <nav className="flex justify-between flex-wrap ">
                    <h1 className="text-3xl underline underline-offset-8 font-mono font-extrabold decoration-gray-300">Portfolio</h1>
                    <ul className="flex space-x-3  mt-5 lg:mt-2  ">
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <NavLink to="/tasks" >Task</NavLink>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <NavLink to="/project">Project</NavLink>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                

        </div>
    </>
    )
    }

export default Navbar
