import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { list } from 'postcss'

function App() {
  const [list,setList] = useState([])
 
  useEffect ( ()=>{
      async function Getdata() {
          let Response =await axios.get('http://localhost:3002/students')
          console.log(Response.data)
          if(Response.status==200){
            console.log('if working', Response.data)
            // Setlist(JSON.parse(Response.data))
            setList(Response.data)
          }
      }
      Getdata()
      
  },[])
  return (
    <>
     { 
        list.map((item)=>(<h1>id:{item.id} <br/> name : {item.name} <br/> age : {item.age}</h1>))
     }
    </>
  )
}

export default App
