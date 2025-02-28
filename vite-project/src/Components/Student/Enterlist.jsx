import React from 'react'
import StudentList from './studentList'

function Enterlist(prop) {
  return (
    <li>
{prop.name} {prop.surname}{prop.age}
    </li>
  )
}

export default Enterlist
