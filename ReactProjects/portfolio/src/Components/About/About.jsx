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
        { Type: 'Skills', title:'Soft Skills', val:['Trust Worthy' , 'Adaptibility and Flexibility' , 'Honesty' , 'Cannot say no to others']} ,       
        { Type: 'Skills', title:'Hard Skills', val:[
            { title :'Operating System' , val:'Windows'},
            { title :'Database', val: 'MySql & MongoDB'},
            { title :"Software Skills",val 	: 'MERN FullStack Development , Frontend Development by HTML CSS & JS , Tailwind CSS & Data analytics by PowerBI '}
          ]},
        { Type:'Experience', title:'Apr - Sep , 2024', val:' As intern in Digital Computing on React JS'},
        //{ Type:'Experience',title:'',val:''},
        { Type: 'Education', title:'2022-2026', val:'Btech With CS Branch'},
        { Type: 'Education', title:'2021-2022', val:'High School from Kendirya Vidyalaya with 75.8%'}
    ]
  return (
    <div>
        <div className="lg:flex  w-full mt-10 justify-center gap-10 px-4 px-[10%]">
            <div className=" md:w-full rounded-2xl  ">
                <img src={Aboutimg} className="rounded-2xl border-2 border-amber-50 border-solid md:shadow-gray-400 w-[85%]  h-96 " alt="Nakshatra Agrawal"></img>
            </div>
            <div className=" md:2/3 lg:pl-16  " id="about">
                <Aboutme/><br/>
                <div className="flex md:flex-col">
                    <div className="md:flex md:flex-wrap mt-3 mb-6">
                        <Aboutselect pass={'Skills'} Choosen={Choosen}/>
                        <Aboutselect pass={'Experience'} Choosen={Choosen}/>
                        <Aboutselect pass={'Education'} Choosen={Choosen}/>
                    </div>
                    <div>
                        <AboutContent data={data} Selection={Selected} d1={data[0]} d2={data[1]}/>
                    </div>  
                </div>                
            </div>
        </div>      
    </div>
  )
}

export default About
