import React from 'react'

function TodoDetails(prop) {
  return (
    <div className='bg-emerald-300 flex gap-2 justify-between p-3 m-2 rounded-2xl'>
            <div className='flex gap-2'>
                <p/>{prop.index+1}.
                <p/>{prop.task}
            </div>
            <div className='flex gap-6'>
                {prop.time}
                {prop.istrue?<i className='fa-solid fa-check'></i>:<i className='fa-solid fa-x'></i>}
                <i onClick={()=>{prop.delete(prop.index)}} className='fa-solid fa-trash'/>
            </div>

            </div>
  )
}

export default TodoDetails
