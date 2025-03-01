import React, { useState } from 'react'
import Enterlist from './Enterlist'


function studentList() {  
  const [name,Setname]=useState()
  const [surname,Setsurname]=useState()
  const [age,Setage]=useState()
  const [Student,Setstudent]=useState([
])
  const Delete = (index)=>{ //deletion by usestate
    Student.splice(index,1) //
    console.log('working')
    Setstudent([...Student])
  }
  return (
    <>
        <div className='flex '>
          <input 
            type='text' 
            className='bg-white text-black p-2 m-2' 
            onChange={(e)=>Setname(e.target.value)} 
            value={name} 
            placeholder='name'>
            </input>

          <input 
            type='text' 
            className='bg-white text-black p-2 m-2' 
            onChange={(e)=>Setsurname(e.target.value)} 
            value={surname} 
            placeholder='surname'>
            </input>

          <input 
            type='text' 
            className='bg-white text-black p-2 m-2' 
            onChange={(e)=>Setage(e.target.value)} 
            value={age} 
            placeholder='age'>
            </input>

        <button className='bg-blue-400 p-3 m-2 rounded-2xl' 
        onClick={()=>Setstudent([
          ...Student,
          {
            Name : name ,
            Surname : surname ,
            Age: age
          }
        ])}>submit</button>
        {}
    </div>
    {
<<<<<<< HEAD
      Student.map((data,i)=>
        <Enterlist index={i} name={data.name} surname={data.surname} age={data.age}/>
=======
      Student.map((data,i)=><div>
        <Enterlist name={data.Name} surname={data.Surname} age={data.Age} Deletedetail={Delete} index={i}/>      
      </div>
>>>>>>> 0f13befbcc1d76d9451aade9afbd9b338bf27ef7
      )
   
    }
     
    
    </>
  )
}

export default studentList


