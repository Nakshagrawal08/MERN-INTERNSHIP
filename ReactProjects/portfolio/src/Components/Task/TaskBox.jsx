import React from 'react'


function TaskBox(prop) {

    const data =[
        { Type: 'Web Design', title:'Banner', link:'https://nakshatra0864.netlify.app/web%20design/day1/day1.html'},
        { Type: 'Web Design', title:'Intro Page', link:'https://nakshatra0864.netlify.app/web%20design/day2/day2.html'},
        { Type: 'Web Design', title:'Pralee Technology', link:'https://nakshatra0864.netlify.app/web%20design/day3/day3.html'}, 
    
        { Type: 'Frontend with js', title:'Login Page', link:'https://nakshatra0864.netlify.app/quiz/login'},
        { Type: 'Frontend with js', title:'Registration Page', link:'https://nakshatra0864.netlify.app/quiz/register'},
        { Type: 'Frontend with js', title:'Basic Calculator', link:'https://nakshatra0864.netlify.app/calc'},
        { Type: 'Frontend with js', title:'Quiz', link:'https://nakshatra0864.netlify.app/quiz/login'},
    
        { Type: 'Frontend with React', title:'Front with React 1', link:'#'},
    
        { Type: 'NodeJS', title:'Node 1', link:'#'},
    
        { Type: 'ExpressJS', title:'Express 1', link:'#'},
    
        { Type: 'Mangodb', title:'Mangodb 1', link:'#'},
    
        { Type: 'MERN STACK', title:'MERN STACK Project 1', link:'#'},
      
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

export default TaskBox
