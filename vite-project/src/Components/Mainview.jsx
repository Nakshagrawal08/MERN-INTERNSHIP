import React from 'react'
import Stu from './Student/StudentList'
import Pagestatus from './login/Pagestatus'
import Todo from './todo/todo'
import Contact from './Contact/Contact'
export default function Mainview() {
  return (
    <>
    <div className='bg-neutral-500 w-[80%] text-black py-4'>
      {/* <Pagestatus/>  
       <Stu/>
      <Todo/> */}
      <Contact/>
    </div></>
  )
}
