import React from 'react'

function TaskContent(prop) {
  return (
    <div>
        {
            prop.data.map((item) => prop.Selection == item.Type ? <li ><span className="text-blue-400">{item.title}</span><br/>{item.val}</li>:'')
        }
    </div>
  )
}

export default TaskContent
