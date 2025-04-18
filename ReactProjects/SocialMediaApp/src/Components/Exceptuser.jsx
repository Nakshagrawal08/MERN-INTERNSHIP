import { useEffect, useState } from 'react'
import React  from 'react'
import linkedin from './linkedin.png'
import axios from 'axios'
function Exceptuser() {

  const [ListOfUser,SetListOfUser]=useState([])
  const [ListOfPosts,SetListOfPost]=useState([])
    const [Option , SetOption] = useState('')
    useEffect ( ()=>{
        async function Getdata() {
            let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
            if(Response.status==200){
                SetListOfUser(Response.data)
            }   
        };
        async function Getposts() {
          let Response =await axios.get('https://jsonplaceholder.typicode.com/posts')
            if(Response.status==200){
                SetListOfPost(Response.data)
            }   
        }
        Getdata()
        Getposts()
    },[])
  
   
 
    const Getdetails = (id)=>{
      SetOption(id)
     
    }

  return (
    <>
     

        {ListOfPosts.map((post)=>ListOfUser.map((user)=>
        <div className=' flex  items-center space-x-4 hover:px-4 hover:ease-in-out hover:duration-400 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg shadow-md'>
        <img src={linkedin} className=' shadow-2xs  rounded-full size-13 '></img>
        
          <h1 onClick={()=>Getdetails(user.id)}  className='text-black p-4  m-2 w-72 hover:font-bold'>{ user.name}</h1>
          <p className="text-blue-500 text-sm cursor-pointer">{user.id==post.userId?"post":"no post"}</p>
          <p className="text-blue-500 text-sm cursor-pointer">View More...</p>
            
            </div>))
        }
        
    </>
  )
}

export default Exceptuser
