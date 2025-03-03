import React, { useState } from 'react'
import InputContact from './InputContact'
import ListContact from './ListContact'
import ListHeading from './ListHeading'

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
    const Delete = (index)=>{ //deletion by usestate
    AddContact.splice(index,1) //
    console.log('working')
    SetAddContact([...AddContact])
  }
  const Deleteall = (index)=>{ //deletion by usestate
    AddContact.splice(index,AddContact.length) //
    console.log('working')
    SetAddContact([...AddContact])
  }
  return (
    <>
    <div className='flex justify-between text-black bg-sky-300 p-2'>
      <div className='flex gap-3' >  
        <i className='fa-solid fa-address-book text-3xl py-2'></i>
        <h1 className='text-4xl text-center  font-bold underline'>Contact</h1>
      </div>
      <div>
        <input placeholder='Search' id='' name='' className='mr-3 border-black border-2 rounded-2xl  p-2' ></input>
        <i className=' fa-solid fa-search text-xl mr-3'></i>
     </div>
    </div>
    <div className='flex p-5' >
      <div className='border-2 p-4 h-max border-white bg-neutral-400'>
        <div className=' p-4  border-white border-1 bg-gray-600 shadow-sm shadow-black rounded-2xl'>
            <h1 className='text-3xl text-center  font-bold underline mb-6'>Add Contact</h1>
            <InputContact type="text" value={Addname} Onchange={(e)=>SetAddname(e.target.value) }title='Enter Name'/>
            <InputContact type="text" value={Addnumber} Onchange={(e)=>SetAddnumber(e.target.value) }title='Enter Contact Number'/>
            <InputContact type="email" value={Addemail} Onchange={(e)=>SetAddemail(e.target.value)} title='Enter Email'/>
          <div className="grid grid-cols-2 p-2 gap-4 mt-4">
            <button onClick={Save} className='bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'>Save</button>    
            <button onClick={Deleteall} className='bg-blue-400 hover:bg-blue-500 p-2 rounded-2xl'>Delete all</button>    
          </div>
        </div>
      </div>
        <div className='w-full ml-4'>
            <ListHeading/>
      
        {  
           AddContact.map((item,i)=>
          <ListContact Name={item.Name} i={i} Email={item.Email} Delete={Delete} Number={item.Number}/>)
                
        }
        </div>
    </div>
    </>
  )
}

export default Contact
