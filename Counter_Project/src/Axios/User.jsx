import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Userdetails from './Userdetails'
import Selected from './Selected'

export default function user() {
    const [ListOfUsers,SetListOfUser]=useState([])
    const [Option , SetOption] = useState('')
    useEffect ( )
        

    const [option ,Setoption]=useState('')
    let Extradetail=(id)=>{
      Setoption(id)

    }
//  
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

}


