import React from 'react'
import stu from './studentList'
export default function Mainview() {
  return (
    <>
    <div className='bg-[#fceecb] w-[80%] text-black py-4'>
    {
      stu.map((data,i)=><li className='border-collapse border border-black border-1 p-2 mx-10'>{i+1}.{data.name} {data.surname}</li>)
    }
    </div>
    </>
  )
}
