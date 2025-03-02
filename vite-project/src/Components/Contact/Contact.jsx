import React, { useState } from 'react'
import InputContact from './InputContact'
import ListContact from './ListContact'

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
    <div className='flex justify-between text-white m-2'>
      <div className='flex gap-3' >
        <i className='fa-solid fa-address-book text-3xl py-2'></i>
        <h1 className='text-4xl text-center  font-bold underline'>Contact</h1>
      </div>
      <div>
        <input placeholder='Search' id='' name='' className='mr-3 border-emerald-200 border-2 rounded-2xl  p-2' ></input>
        <i className=' fa-solid fa-search text-xl mr-3'></i>
     </div>
    </div>
    <div className='bg-gray-800 flex p-5' >
        <div className=' p-4  border-white border-2 shadow-sm shadow-amber-50 rounded-2xl'>
            <InputContact type="text" value={Addname} Onchange={(e)=>SetAddname(e.target.value) }title='Enter Name'/>
            <InputContact type="text" value={Addnumber} Onchange={(e)=>SetAddnumber(e.target.value) }title='Enter Contact Number'/>
            <InputContact type="email" value={Addemail} Onchange={(e)=>SetAddemail(e.target.value)} title='Enter Email'/>
          <div className="grid grid-cols-2 p-2 gap-4 mt-4">
            <button onClick={Save} className='bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'>Save</button>    
            <button onClick={Deleteall} className='bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'>Delete all</button>    
          </div>
        </div>
        <div className='w-full'>
            <div className='m-2 p-2 gap-3 bg-white grid grid-cols-3' >
              <div className='flex gap-3'>
                <p1 className=''/>S.no
                <p1 className=''/> Name
              </div>
              <h1>Email</h1>
              <h1>Contact Number</h1>
            </div>
      
        {  
           AddContact.map((item)=>
          <ListContact Name={item.Name} Email={item.Email} Number={item.Number}/>)
                
        }
        </div>
    </div>
    </>
  )
}

export default Contact
