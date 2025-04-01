import React from 'react'
import Stu from './Student/StudentList'
import Pagestatus from './login/Pagestatus'
import User from './Axios/User'

export default function Mainview() {
  return (
    <>
    <div className='bg-neutral-500 w-[80%] text-black py-4'>
      {/* <Pagestatus/>  
       <Stu/> */}
    <User />
      
    </div></>
  )
}
