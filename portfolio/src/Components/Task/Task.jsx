import React, {useState} from 'react'
import TaskSelect from './TaskSelect'
import AboutContent from '../About/AboutContent'


export function Task() {
     const [Selected,SetSelected]=useState('Web Development')
        
     let Choosen=(option)=>{
        SetSelected(option)
        
    }
    const data =[
            { Type: 'Web Development', title:'Banner', link:'https://nakshatra0864.netlify.app/web%20design/day1/day1.html'},
            { Type: 'Web Development', title:'Intro Page', link:'https://nakshatra0864.netlify.app/web%20design/day2/day2.html'},
            { Type: 'Web Development', title:'Pralee Technology', link:'https://nakshatra0864.netlify.app/web%20design/day3/day3.html'}, 

            { Type: 'Frontend Development', title:'Login Page', link:'https://nakshatra0864.netlify.app/quiz/login'},
            { Type: 'Frontend Development', title:'Registration Page', link:'https://nakshatra0864.netlify.app/quiz/register'},
            { Type: 'Frontend Development', title:'Basic Calculator', link:'https://nakshatra0864.netlify.app/calc'},
            { Type: 'Frontend Development', title:'Quiz', link:'https://nakshatra0864.netlify.app/quiz/login'},

            { Type: 'React', title:'React 1', link:'#'},

            { Type: 'NodeJS', title:'Node 1', link:'#'},

            { Type: 'ExpressJS', title:'Express 1', link:'#'},

            { Type: 'Mangodb', title:'Mangodb 1', link:'#'},

            { Type: 'MERN STACK', title:'MERN STACK Project 1', link:'#'},
          
        ]
  return (
        <div className="  justify-center mt-10">
            <div className=" ml-4  lg:mx-24 md:my-16" id="tasks" >
                <div className=" text-center">
                    <h1 className="text-4xl underline underline-offset-14 place-content-center  decoration-blue-500">My Tasks</h1>
                </div>
                <div className=" ml-3 mt-4  flex md:flex-col ">
                    <div className="md:flex md:flex-wrap md:justify-between  md:text-center  mt-3   md:gap-6 md:mb-6  ">
                        <TaskSelect Choosen={Choosen} pass='Web Development'/>
                        <TaskSelect Choosen={Choosen} pass='Frontend Development'/>
                        <TaskSelect Choosen={Choosen} pass='React'/>
                        <TaskSelect Choosen={Choosen} pass='NodeJS'/>
                        <TaskSelect Choosen={Choosen} pass='ExpressJS'/>
                        <TaskSelect Choosen={Choosen} pass='Mangodb'/>
                        <TaskSelect Choosen={Choosen} pass='MERN STACK'/>
                    </div>
                    <div className=" mt-6 ml-8 ">
                        <div className="tabcontent activecontent " id="webdesign">
                            <AboutContent data={data} Selection={Selected}/>
                        </div>
                    </div>                   
                </div>
            </div>           
        </div>    
   )
}
export default Task