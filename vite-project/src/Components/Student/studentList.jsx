import React, { useState } from 'react'
import Enterlist from './Enterlist'


function studentList() {  
  const [Student,Setstudent]=useState([
    {name:'naksh',surname:'agrawal',age:'19'},
    {name:'naksh1',surname:'agrawal1',age:'19'},
    {name:'naksh2',surname:'agrawal2',age:'19'},
    {name:'naksh3',surname:'agrawal3',age:'19'},
  ])
  return (
    <>
    {
      Student.map((data,i)=>
        <Enterlist index={i} name={data.name} surname={data.surname} age={data.age}/>
      )
   
    }
     {/* <button onClick={''}></button> */}
    
    </>
  )
}

export default studentList


