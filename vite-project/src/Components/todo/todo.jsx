import React, { useState } from 'react'

function todo() {
  const [Addtask , SetAddtask] = useState()
  const [Addtime , SetAddtime]= useState()
  const [TodoList ,SetTodoList] = useState([])
  
    return (
    <>
        <div className='bg-neutral-600 border-white border-1 rounded-2xl p-6 h-96 mx-[25%]'>
          <h1 className='text-4xl text-center font-bold underline'>Todo List</h1><br/>
            <input className='p-2 mx-6 w-[92%] bg-white m-2 ' type='text' value={Addtask} onChange={(e)=>SetAddtask(e.target.value)} placeholder='Enter Task'></input>
            <input className='p-2 mx-6 w-[92%] bg-white m-2 ' type='time' value={Addtime} onChange={(e)=>SetAddtime(e.target.value)} placeholder='Enter Time'></input>
            <div className=' p-4 grid grid-cols-3 gap-5' >
            <button onClick={()=>SetTodoList([
      ...TodoList , {
        Task : Addtask ,
        Time : Addtime      
      }
    ])} className='bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'> Add Task</button>
            <button onClick={''} className='bg-emerald-400 hover:bg-emerald-500 p-2 rounded-2xl'> Show Task</button>
            <button onClick={''} className='bg-rose-300 hover:bg-rose-400 p-2 rounded-2xl'> Delete Task</button>
            </div>
          {
            TodoList.map((item,i)=>
            <div className='bg-orange-300 flex justify-between p-3 rounded-2xl'>
              {i+1}.
              {item.Task}
              <div/>{item.Time}<i className='fa-solid fa-x'></i>

            </div>)
          }
        </div>
    </>
  )
}

export default todo
