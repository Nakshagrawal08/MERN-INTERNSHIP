import React from 'react'

function InputContent(prop) {
  return (
    <div>
        <input className='p-2 mx-6 w-[92%] bg-white m-2 ' type={prop.type} value={prop.value} onChange={prop.Onchange} placeholder='Enter Task'></input>
    </div>
  )
}

export default InputContent
