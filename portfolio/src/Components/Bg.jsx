import React from 'react'
import Bgimage from '../pictures/bg.jpg'
function Bg(){
  return (
    <div className={`bg-[url(${Bgimage})] mt-2 bg-cover h-screen py-64`}>
       <div className=" text-3xl text-center animate-pulse flex-row py-4  bg-black/50 mx-32 ">
            <p>Frontend Designer</p>
            <h1 className="mt-5">Hi , I am <span className="text-blue-400 italic font-bold">Nakshatra Agrawal</span><br/> from Khandwa</h1>
        </div>
       
    </div>
  )
}

export default Bg
