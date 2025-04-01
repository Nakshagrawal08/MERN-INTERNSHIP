import { useState } from 'react'
import reactLogo from './assets/react.svg'
import User from './Axios/User'
// import viteLogo from '/vite.svg'
// import User from './Axios/User'
import './App.css'
import Counter from './counter'

function App() {
 

  return (
    <>
      <div className='content-center justify-center h-screen mx-[40%]'>
       <User />
       {/* <Counter/> */}
      </div>
     
    </>
  )
}

export default App
