import React, { useState } from 'react'
import InputContact from './InputContact'
import ListContact from './ListContact'
import ListHeading from './ListHeading'
import image  from './CONTACT.png'
import grid from './grid.png'
import pic from '../pictures/calling.jpg'

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
    SetAddContact([...AddContact])
  }
  const Deleteall = (index)=>{ //deletion by usestate
    AddContact.splice(index,AddContact.length) //

    SetAddContact([...AddContact])
  }
  return (
    <>
      <div className='flex justify-between text-black bg-sky-50 p-2'>
        <div className='flex gap-3' >  
          <i className='fa-solid text-gray-700 fa-bars hover:bg-gray-400  text-3xl hover:rounded-full p-3'></i>
          <img src={image}className=' hover:bg-gray-400  text-3xl hover:rounded-full p-1'></img>
          <h1 className='text-2xl pt-2 text-center  '>Contacts</h1>
        </div>
        <div className='w-[60%] flex shadow-black bg-sky-100 shadow-sm rounded-xl '>
          <i className=' fa-solid text-gray-700 fa-search text-xl m-3 p-1'></i>
          <input placeholder='Search' id='' name='' className=' my-1 mr-2 w-full border-none  p-2' ></input>
        </div>
        <div className='flex gap-6'>  
          <i className="fa-solid text-gray-700 pt-4 text-3xl fa-question"></i>
          <i className="fa-solid text-gray-700 pt-4 text-3xl  fa-gear"></i>
          <img src={grid} className=' size-9   text-3xl mt-3'></img>
          <img src={pic} className='size-9 border-1 mt-3 border-black rounded-full'/>
        </div>
      </div>
    <div className='flex p-5 bg-neutral-100 rounded-3xl m-5' >
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
          <h1 className='text-3xl text-black'>Contact ({AddContact.length})</h1>
            <ListHeading/>
            <hr></hr><br></br>
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
