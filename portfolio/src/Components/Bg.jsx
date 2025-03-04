import React from 'react'
import Bgi from '../pictures/bg.jpg'
function Bg(){
  return (
    <div className="bg-[url('../pictures/bg.jpg')] bg-cover h-screen">
        <div className="my-56 text-3xl text-center animate-pulse flex-row py-4  bg-black/50 mx-32 ">
           
            <p>Frontend Designer</p>
            <h1 className="mt-5">Hi. I am <span className="text-blue-400 italic font-bold">Nakshatra Agrawal</span><br/> from Khandwa</h1>
        </div>
    </div>
  )
}

export default Bg
