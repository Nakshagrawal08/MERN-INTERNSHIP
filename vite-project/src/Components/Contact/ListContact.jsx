import React from 'react'
import pic from '../pictures/calling.jpg'
function ListContact({Name , Email,Delete , Number,i}) {
  return (<>
    <div className=' p-2 gap-3 text-xl bg-amber-50 shadow-sm shadow-black  grid grid-cols-3'>
            <div className='flex gap-3'>
              <img src={pic} className='size-7 border-1 border-black rounded-full'/>
              <h1 className=''/>    {Name}
            </div>
            <h1>{Email}</h1>
            <div className='w-full flex'>
            <h1 className='w-2/3'>{Number}</h1>
            <div>
              <i className='fa-solid fa-trash mx-4'onClick={()=>Delete(i)} ></i>
              <i className='fa-solid fa-phone mx-4'></i>
            </div>
            </div>
    </div>
    </>
  )
}

export default ListContact
