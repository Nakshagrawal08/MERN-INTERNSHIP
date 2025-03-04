import React from 'react'
import { NavLink } from 'react-router'
import NavbarItem from './NavbarItem'
//import Bg from './src/pictures/bg.jpg'
function Navbar() {

  return (
  <>
        
            <div className="mt-2 px-4 lg:px-16" id="div">
                <nav className="flex justify-between flex-wrap ">
                    <h1 className="text-3xl underline underline-offset-8 font-mono font-extrabold decoration-gray-300">Portfolio</h1>
                    <ul className="flex space-x-3  mt-5 lg:mt-2  ">
                        <NavbarItem To='home' title='Home'/>
                        <NavbarItem To='/about' title='about'/>
                        <NavbarItem To='/tasks' title='Tasks'/>
                        <NavbarItem To='/project' title='Projects'/>
                        <NavbarItem To='/contact' title='Contact'/>
                        
                    </ul>
                </nav>
                

        </div>
    </>
    )
    }

export default Navbar
