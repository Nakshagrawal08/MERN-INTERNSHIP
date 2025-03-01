import React,{useState} from 'react'
import Home from './Home'
import Login from './login'
function Pagestatus() {

    const [isLogin,SetisLogin]=useState(false) 
  return (
    <div>
        <button onClick={()=>{SetisLogin(!isLogin)}} className='p-2 bg-blue-300 hover:bg-blue-400'>change</button><br/>
      {isLogin?<Home/>:<Login/>}
    </div>
  )
  
}

export default Pagestatus
