import React from 'react'

function Project() {
 
  const data =[
          { title:'Project 1', link:'#'},
          { title:'Project 2', link:'#'},              
      ]
  return (
    <div className="ml-4  md:mx-32 md:my-16" id="project">
        <div className=" text-center">
            <h1 className="text-4xl underline underline-offset-14 place-content-center  decoration-blue-500">My Projects</h1>
        </div>        
        <div className="md:ml-12 ml-6 mt-10 mt-4 ">
        {
           data.map((item) => <a href={item.link}><li className="text-blue-400" >{item.title}</li></a>)
        }
        </div>
    </div>
  )
}

export default Project
