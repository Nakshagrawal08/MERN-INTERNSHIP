import React from 'react'

function MenuButton(prop) {
  return (
    <div>
      <li className='bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer'>{prop.title}</li>
    </div>
  )
}

export default MenuButton
