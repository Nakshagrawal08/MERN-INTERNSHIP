import React from 'react'

function TaskSelect(prop) {
  return (
    <div>
       <p onClick={()=>prop.Choosen(prop.pass)} className=" lg:border-2  hover:border-blue-500 text-blue-700 font-bold md:bg-blue-300 md:rounded-2xl lg:border-solid lg:bordeyr-gray-300 p-3">{prop.pass}</p>
    </div>
  )
}

export default TaskSelect