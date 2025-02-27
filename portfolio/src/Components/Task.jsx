import React from 'react'

export function Task() {
    // var tablinks = document.getElementsByClassName("tablink");
    // var tabcontents = document.getElementsByClassName("tabcontent");
  return (
    
        <div className="  justify-center mt-10">
            <div className=" ml-4  lg:mx-32 md:my-16" id="tasks" >
                <div className=" text-center">
                    <h1 className="text-4xl underline underline-offset-14 place-content-center  decoration-blue-500">My Tasks</h1>
                </div>
                <div className=" ml-3 mt-4  flex md:flex-col ">
                    <div className="md:flex md:flex-wrap md:justify-between  md:text-center  mt-3   md:gap-6 md:mb-6  ">
                        <p  onClick={''} className="tablink activelink  lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:bordeyr-gray-300 p-3">Web Development</p>
                        <p  onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">Frontend Development</p>
                        <p  onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">React</p>
                        <p onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">NodeJS</p>
                        <p  onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">ExpressJS</p>
                        <p  onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">Mangodb</p>
                        <p  onClick={''} className="tablink lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:border-gray-300 p-3">MERN STACK</p>
                    </div>
                    <div className=" mt-6 ml-8 ">
                        <div className="tabcontent activecontent " id="webdesign">
                            <ul>
                                <a href="web design/day1/day1.html"> <li className="text-blue-400">Banner</li></a>
                                <a href="web design/day2/day2.html"> <li className="text-blue-400">Intro Page</li></a>
                                <a href="web design/day3/day3.html"> <li className="text-blue-400">Pralee Technology</li></a>
                            </ul>
                        </div>
                        <div className="tabcontent" id="frontend">
                            <ul>
                                <a href="/quiz/login.html"> <li className="text-blue-400">Login Page</li></a>
                                <a href="/quiz/register.html"> <li className="text-blue-400">Registration Page</li></a>
                                <a href="calc.html"> <li className="text-blue-400">Basic Calculator</li></a>
                                <a href="/quiz/login.html"> <li className="text-blue-400">Quiz</li></a>

                            </ul>
                        </div>
                        <div className="tabcontent" id="reactjs">
                            <ul/>
                                <a href=""/> <li className="text-blue-400">RJS1</li>
                                <a href=""/> <li className="text-blue-400">RJS1</li>
                        
                        </div>
                        <div className="tabcontent" id="nodejs">
                            <ul>
                                <a href=""> <li className="text-blue-400">NJS1</li></a>
                                <a href=""> <li className="text-blue-400">NJS2</li></a>
                            </ul>
                        </div>
                        <div className="tabcontent" id="expressjs">
                            <ul>
                                <a href=""> <li className="text-blue-400">EJS1</li></a>
                                <a href=""> <li className="text-blue-400">EJS2</li></a>
                            </ul>
                        </div>
                        <div className="tabcontent" id="mangodb">
                            <ul>
                                <a href=""> <li className="text-blue-400">MDB1</li></a>
                                <a href=""> <li className="text-blue-400">Mdb2</li></a>
                            </ul>
                        </div>
                        <div className="tabcontent" id="mernstack">
                            <ul>
                                <a href=""> <li className="text-blue-400">mern1</li></a>
                                <a href=""> <li className="text-blue-400">mern2</li></a>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
      
       

//         function opentab(event, tabname) {
//             // First, hide all tab content
//             for (var tabcontent of tabcontents) {
//                 tabcontent.classList.remove("activecontent");
//             }

//             // Remove 'activelink' class from all tab links
//             for (var tablink of tablinks) {
//                 tablink.classList.remove("activelink");
//             }

//             // Show the clicked tab content and apply the active link class
//             document.getElementById(tabname).classList.add("activecontent");
//             event.currentTarget.classList.add("activelink");
//         }
    
   )
}
