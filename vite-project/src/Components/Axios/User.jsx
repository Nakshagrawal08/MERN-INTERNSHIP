import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Userdetails from './Userdetails'
export default function user() {
    const [ListOfUsers,SetListOfUser]=useState([])
    useEffect ( ()=>{
        async function Getdata() {
            let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
            if(Response.status==200){
                SetListOfUser(Response.data)
                
            }
            
        }
        Getdata()
        
    },[])
    const [option ,Setoption]=useState('')
    let Extradetail=(id)=>{
      Setoption(id)

    }
  return (<>
    <div className='flex'>
    <div>
      {
   
      ListOfUsers.map((user)=>
        <h1 onClick={()=>Extradetail(user.id)} className='text-black bg-neutral-500 my-2 w-64 p-3'>id: {user.id}<br/>Name:{user.name}</h1>
      )
      }
  </div>
  <div>
{
 ListOfUsers.map((user)=>option==user.id?<Userdetails data={user}/>:'')
}
  </div></div>
  </>)
}


