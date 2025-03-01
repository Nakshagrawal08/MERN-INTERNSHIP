import React,{useState} from 'react'
import Home from './Home'
import Login from './login'
<<<<<<< HEAD
=======

>>>>>>> 0f13befbcc1d76d9451aade9afbd9b338bf27ef7
function Pagestatus() {

    const [isLogin,SetisLogin]=useState(false) 
  return (
    <div>
      {isLogin?<Home/>:<Login/>}
        <button onClick={()=>SetisLogin(!isLogin)} className='p-2 bg-blue-300 hover:bg-blue-400'>change</button><br/>
      
    </div>
  )
  
}

export default Pagestatus
