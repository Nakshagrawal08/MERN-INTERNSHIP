import React from 'react'
import linkedin from './linkedin.png'
function Exceptuser() {
  return (
    <>
     

        <div className='  flex items-center space-x-4 hover:px-4 hover:ease-in-out hover:duration-400 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg shadow-md'>
            
            <img src={linkedin} className=' shadow-2xs  rounded-full size-13 '></img>
            <div className="">
                <p className="font-bold text:md hover:text-lg ">Nakshatra Agrawal</p>
                <p className="text-gray-500 text-sm">25 Posts</p>
                <p className="text-blue-500 text-sm cursor-pointer">View More...</p>
            </div>
        </div>
    </>
  )
}

export default Exceptuser
