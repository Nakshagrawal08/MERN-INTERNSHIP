import React, { useState } from 'react'
import TodoDetails from './TodoDetails'
import InputContent from './InputContent'
import TodoButton from './TodoButton'

function todo() {
  const [Addtask , SetAddtask] = useState()
  const [Addtime , SetAddtime]= useState()
  const [TodoList ,SetTodoList] = useState([])
  const Delete = (index)=>{ //deletion by usestate
    TodoList.splice(index,1) //
    console.log('working')
    SetTodoList([...TodoList])
  }
  const Deleteall = (index)=>{ //deletion by usestate
    TodoList.splice(index,TodoList.length) //
    console.log('working')
    SetTodoList([...TodoList])
  }
  const Add=()=>SetTodoList([
    ...TodoList , {
      Task : Addtask ,
      Time : Addtime ,
      Status : true     
    }
  ])
    return (
    <>
        <div className='bg-neutral-600 border-white border-1 rounded-2xl p-6  mx-[10%]'>
         
          <h1 className='text-4xl text-center font-bold underline'>Todo List</h1><br/>

          <InputContent type="text" value={Addtask} Onchange={(e)=>SetAddtask(e.target.value)}/>
          <InputContent type="time" value={Addtime} Onchange={(e)=>SetAddtime(e.target.value)}/>
          <div className=' p-4 grid-cols-2 grid gap-5' >
            <TodoButton onClick={Add} title='Add Task' color='blue'/>
            <TodoButton onClick={Deleteall} title='Delete All Tasks'/>
            
            </div>
          
            {TodoList.map((item,i)=>
            <TodoDetails index={i} task={item.Task} time={item.Time} istrue={item.Status} delete={Delete}/>)
            }
        </div>
    </>
  )
}

export default todo
