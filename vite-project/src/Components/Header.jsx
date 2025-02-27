import React from 'react'

 function Header() {
  return (
    <>
    <div className='bg-[#000000] text-gray-300 h-16 fixed top-0 w-full flex  justify-between px-5 py-2 text-4xl h-16 '>
      <div className='flex'>
        <i className="fa-solid fa-bars hover:animate-pulse hover:ease-in duration-500 text-xl p-4 hover:text-3xl  hover:p-2"></i>
        <h1 className='font-bold '>Student Record System</h1>
      </div>
      <div className='  text-xl '> 
          <input placeholder='Search' id='' name='' className='mr-3 p-1' ></input>
          <i className=' fa-solid fa-search text-xl mr-3'></i>
          <i className="fa-solid fa-circle-user border-2 border-white rounded-full p-2 text-3xl  "></i>
      </div>
    </div>
    
    </>
  )
}
export default  Header