import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ListOfData, SetListOfData] = useState()
  const [Option , SetOption] = useState('')
  useEffect ( ()=>{
      async function Getdata() {
          let Response =await axios.get('http://localhost:3001/students')
          
          if(Response.status===200){
            SetListOfData(JSON.parse(Response.data))
            console.log(JSON.parse(Response.data));  
            console.log('Data ');
          }
          
      }
      Getdata()
      
  },[])
  return (
    <>
     { console.log(typeof(ListOfData))+
        ListOfData?.map((item)=><h1>id:{item.id} <br/> name : {item.name} <br/> age : {item.age}|</h1>)
     }
    </>
  )
}

export default App
