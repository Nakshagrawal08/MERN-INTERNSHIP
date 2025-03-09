import React from 'react'
import Bgimage from '../pictures/bg.jpg'
function Bg(){
  return (
    <div className={`bg-[url(${Bgimage})] mt-2 bg-cover h-screen flex items-center justify-center text-center py-64`}>
       <div className=" text-3xl text-center  flex-row p-10  bg-black/50 w-max "> 
            <h1 className="">Hi , I am <span className="text-blue-400  font-bold">Nakshatra Agrawal</span> <br />A passionate Frontend Designer from Khandwa</h1>
            <button class="py-3 px-10 mt-3 rounded-lg text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition">Let's Work Together</button>
        </div>
       
    </div>
  )
}

export default Bg
