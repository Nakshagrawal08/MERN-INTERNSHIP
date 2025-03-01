import React from 'react'
import StudentList from './studentList'

function Enterlist(prop) {
  return (
    <li className=' p-3 bg-amber-200 justify-between border-black border-2 flex  text-black m-3'>
      {prop.index+1}. {prop.name}  <div/> {prop.surname}  <div/>  {prop.age}
      <div/> <button onClick={()=>prop.Deletedetail(prop.index)} className='bg-blue-400 ml-3 hover:bg-blue-500 p-2 rounded-2xl'>delete</button> {/* lifting state up */}
    </li>
  )
}

export default Enterlist
