import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
  return (
    <div>
      {
   
      ListOfUsers.map((user)=>
        <h1 className='text-black'>id: {user.id}</h1>
      )
      }
    </div>
  )
}


