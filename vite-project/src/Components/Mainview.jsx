import React from 'react'
import Stu from './Student/studentList'
import Pagestatus from './Student/login/Pagestatus'
import Todo from './todo/todo'
export default function Mainview() {
  return (
    <>
    <div className='bg-neutral-500 w-[80%] mx-20 my-40   text-black py-4'>
      {/* <Pagestatus/> */}
      {/* <Stu/> */}
      <Todo/>
    </div></>
  )
}
