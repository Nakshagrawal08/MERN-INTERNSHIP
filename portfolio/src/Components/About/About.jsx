import React, { useState } from 'react'
import AboutContent from './AboutContent'
import Aboutme from './Aboutme'
import Aboutimg from '/src/pictures/about2.jpg'
import Aboutselect from './Aboutselect'


function About() {


    const [Selected,SetSelected]=useState('Skills')
    let Choosen=(option)=>{
    SetSelected(option)
    
}
const data =[
        { Type: 'Skills', title:'Web Development', val:'Web App Development'},
        { Type: 'Skills', title:'App Development', val:'Building Android apps'},
        { Type:'Experience', title:'2024-current', val:'ABC Company'},
        { Type:'Experience',title:'2022-2024',val:'XYZ Company'},
        { Type: 'Education', title:'2022-2026', val:'Btech With CS Branch'},
        { Type: 'Education', title:'2021-2022', val:'High School With PCM+CS'}
    ]
  return (
    <div>
        <div className="lg:flex  w-full mt-10 justify-center gap-10 px-4 px-[10%]">
            <div className=" md:w-2/3 rounded-2xl  ">
                <img src={Aboutimg} className="rounded-2xl border-2 border-amber-50 border-solid md:shadow-gray-400 md:max-w-full  h-96 " alt="Nakshatra Agrawal"></img>
            </div>
            <div className=" md:2/3 lg:pl-16 " id="about">
                <Aboutme/>
                <div className="flex md:flex-col">
                    <div className="md:flex md:flex-wrap mt-3 mb-6">
                        <Aboutselect pass={'Skills'} Choosen={Choosen}/>
                        <Aboutselect pass={'Experience'} Choosen={Choosen}/>
                        <Aboutselect pass={'Education'} Choosen={Choosen}/>
                    </div>
                    <div>
                        <AboutContent data={data} Selection={Selected}/>
                    </div>  
                </div>                
            </div>
        </div>      
    </div>
  )
}

export default About
