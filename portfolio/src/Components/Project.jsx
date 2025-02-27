import React from 'react'

function Project() {
  return (
    <div className="ml-4  md:mx-32 md:my-16" id="project">
        <div className=" text-center">
            <h1 className="text-4xl underline underline-offset-14 place-content-center  decoration-blue-500">My Projects</h1>
        </div>        
        <div className="md:ml-12 ml-6 mt-10 mt-4 ">

                <ul >
                    <a href=""> <li className="text-blue-400">Project1</li></a>
                    <a href=""> <li className="text-blue-400">Project</li></a>
                </ul>
        </div>
    </div>
  )
}

export default Project
