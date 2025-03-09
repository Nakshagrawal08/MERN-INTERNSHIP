import React, { useState } from 'react'

function UsestateUsage() {
    var x='xyz'
    const [value , Setvalue]= useState(x)
    const click = ()=>{
        Setvalue('abc')
        console.log(value)
    }
  return (
    <div className='m-4'>
      <h1 className='text-3xl'>{value}</h1>
      <button onClick={click} className='bg-blue-400' >change</button>
    </div>
  )
}  

export default UsestateUsage
