import React from 'react'

function ListHeading() {
  return (
    <div className='m-2 p-2 gap-3 font-bold  text-black-200 grid grid-cols-3' >
      <h1 className='ml-10'> Name</h1> 
      <h1>Email</h1>
      <h1>Phone  Number</h1>
    </div>
  )
}

export default ListHeading
