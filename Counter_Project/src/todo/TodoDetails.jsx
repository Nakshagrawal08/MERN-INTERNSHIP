import React from 'react'
import { useSelector } from 'react-redux'

function TodoDetails() {
    
  const listofdata=useSelector(state =>state.studentname)
  return (

    <div className='bg-emerald-300 flex gap-2 justify-between p-3 m-2 rounded-2xl'>
            <div className='flex gap-2'>
                <p/>{item.index+1}.
                <p/>{item.task}
            </div>
            <div className='flex gap-6'>
                {item.time}
                {item.istrue?<i className='fa-solid fa-check'></i>:<i className='fa-solid fa-x'></i>}
                <i onClick={()=>{item.delete(item.index)}} className='fa-solid fa-trash'/>
            </div>

            </div>
  )
}

export default TodoDetails
