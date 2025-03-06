import React, { useEffect, useState } from 'react'
import axios from 'axios'
<<<<<<< HEAD
import Userdetails from './Userdetails'
=======
import Selected from './Selected'
>>>>>>> b4f5bd328e0abb0545351a7e0553355de9f32099
export default function user() {
    const [ListOfUsers,SetListOfUser]=useState([])
    const [Option , SetOption] = useState('')
    useEffect ( ()=>{
        async function Getdata() {
            let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
            if(Response.status==200){
                SetListOfUser(Response.data)
                
            }
            
        }
        Getdata()
        
    },[])
<<<<<<< HEAD
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
=======
    const Getdetails = (id)=>{
      SetOption(id)
     
    }
  return (
    <div className='flex'>
      <div>{
   
      ListOfUsers.map((user)=>
        <h1 onClick={()=>Getdetails(user.id)}  className='text-black p-4 border-black border-1 m-2 w-72 hover:font-bold'> id: {user.id}<br/> Name :{ user.name}</h1>
      )
      }
      </div>
        <Selected Details ={ListOfUsers} Selected={Option} />
      </div>
  )
>>>>>>> b4f5bd328e0abb0545351a7e0553355de9f32099
}


