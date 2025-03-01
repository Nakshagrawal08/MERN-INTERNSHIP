import React, { useState } from 'react'
import InputContact from './InputContact'

function Contact() {
    const [Addname ,SetAddname]=useState()
    const [Addemail ,SetAddemail]=useState()
    const [Addnumber ,SetAddnumber]=useState()
    const [AddContact ,SetAddContact]=useState([])
    const Save = ()=>SetAddContact([
        ...AddContact , {
            Name : Addname ,
            Email : Addemail ,
            Number : Addnumber
        }
    ]) 
//     const Delete = (index)=>{ //deletion by usestate
//     AddContact.splice(index,1) //
//     console.log('working')
//     SetAddContact([...AddContact])
//   }
  const Deleteall = (index)=>{ //deletion by usestate
    AddContact.splice(index,AddContact.length) //
    console.log('working')
    SetAddContact([...AddContact])
  }
  return (
    <>
    <h1 className='text-4xl text-center text-white font-bold underline'>Contact</h1><br/>
    <div className='bg-gray-800 flex p-20' >
        <div className=' p-4  border-white border-2 rounded-2xl'>
            <InputContact type="text" value={Addname} Onchange={(e)=>SetAddname(e.target.value) }title='Enter Name'/>
            <InputContact type="text" value={Addnumber} Onchange={(e)=>SetAddnumber(e.target.value) }title='Enter Contact Number'/>
            <InputContact type="email" value={Addemail} Onchange={(e)=>SetAddemail(e.target.value)} title='Enter Email'/>
            <button onClick={Save} className='bg-blue-400 hover:bg-blue-500 p-4 rounded-2xl'>Save</button>    
            <button onClick={Deleteall} className='bg-blue-400 hover:bg-blue-500 p-4 rounded-2xl'>Delete all</button>    
        </div>
        <div className='w-full'>
        {
           AddContact.map((item,i)=><div className='m-2 p-2 text-center bg-gray-600 grid grid-cols-3'>
            <h1>{i+1}.  {item.Name}</h1>
            <h1>{item.Email}</h1>
            <h1>{item.Number}</h1>
           </div>)
                
        }
        </div>
    </div>
    </>
  )
}

export default Contact
