import React from 'react'
//import Bg from './src/pictures/bg.jpg'
function Navbar() {

  return (
  <>
        <div className="bg-[URL('./src/pictures/bg.jpg')] bg-cover h-screen">
            <div className="mt-2 px-4 lg:px-16" id="div">
                <nav className="flex justify-between flex-wrap ">
                    <h1 className="text-3xl underline underline-offset-8 font-mono font-extrabold decoration-gray-300">Portfolio</h1>
                    <ul className="flex space-x-3  mt-5 lg:mt-2  ">
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <a href="#">Home</a>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <a href="#about">About</a>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <a href="#tasks" >Task</a>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <a href="#project">Project</a>
                        </li>
                        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="my-56 text-3xl text-center animate-pulse flex-row py-4  bg-black/50 ">
                    <p>Frontend Designer</p>
                    <h1 className="mt-5">Hi. I am <span className="text-blue-400 italic font-bold">Nakshatra Agrawal</span><br/> from Khandwa</h1>
                </div>
            </div>

        </div>
    </>
    )
    }

export default Navbar
