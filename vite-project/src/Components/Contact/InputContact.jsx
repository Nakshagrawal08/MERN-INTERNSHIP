import React from 'react'

function InputContact(prop) {
  return (
    <div>
        <input className='p-2 mx-6 w-[92%] bg-white text-black m-2 ' type={prop.type} value={prop.value} onChange={prop.Onchange} placeholder={prop.title}></input>
    </div>
  )
}

export default InputContact
