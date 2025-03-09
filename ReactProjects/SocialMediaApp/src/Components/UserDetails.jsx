import React from 'react'
import linkedin from './linkedin.png'
function UserDetails() {
  return (
    <>
 

      <div className='  bg-gray-50 w-full  py-10 px-2 rounded-xl p-4 shadow-sm my-1.5 shadow-black'>
          <div className='space-x-3 mb-3'>
          <div className='float-left'><img src={linkedin} className=' shadow-md  rounded-full size-15 '></img></div>
          </div>
          <hi className=' text-black p-1 text-2xl underline underline-offset-6 font-bold'>Nakshatra Agrawal</hi>
          <div className='p-4'>
            <p className="text-black">nakshatragrawal8@mail.com <br/> Phone: 9479486236 <br/> Posts: 54 <br/> Comments: 54</p>
            <p className="text-blue-500 cursor-pointer ">View More...</p>
          </div>
      </div>
    </>
  )
}

export default UserDetails
