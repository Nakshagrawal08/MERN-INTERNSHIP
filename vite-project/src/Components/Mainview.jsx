import React from 'react'
import Stu from './Student/studentList'
import Login from './Student/login/login'
export default function Mainview() {
  return (
    <>
    <div className='bg-neutral-500 w-[80%] mx-20 my-40   text-black py-4'>
      {/* {
        Stu.map((data,i)=><li className='border-collapse  content-between  border-black border-1 p-2 mx-10 justify-between'>{i+1}. {data.name} {data.surname}<i onClick={()=>{alert('student deleted')}} className='fa-solid fa-x ml-20'></i></li>)
      } */}
      {/* <Stu/> */}
      <Login/>
    </div></>
  )
}
