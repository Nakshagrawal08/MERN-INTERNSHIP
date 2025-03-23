import React from 'react'

function TodoButton(prop) {
  return (
    <button onClick={prop.onClick} className={'bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'}>{prop.title}</button>
  )
}

export default TodoButton
