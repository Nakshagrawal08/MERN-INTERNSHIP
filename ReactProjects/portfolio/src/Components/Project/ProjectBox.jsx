import React from 'react'


function ProjectBox(prop) {

    const data =[
        { type : '' , title:'Project 1', link:'#'},
        { type : '' , title:'Project 2', link:'#'},              
    ]

  return (
    <>
        <div class=" m-4 hover:m-3  hover:duration-200 hover:shadow-sm hover:shadow-orange-300  w-72 border-2 rounded-2xl border-blue-400 bg-gray-700 p-4">
            <h3 class="text-xl text-center  text-blue-400 mb-4">{prop.title}</h3>
            <ul class="text-gray-300">
            {
                data.map((item)=>item.Type==prop.title?<a href={item.link}><li className="hover:text-blue-400" >{item.title}</li></a>:'')
            }
            
                
            </ul>
        </div>
      
    </>
  )
}

export default ProjectBox
