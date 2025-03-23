import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { Outlet } from "react-router"
import Mainview from "./Components/Mainview"
import Sidebar from "./Components/Sidebar"
// import User from "./Components/Axios/User"


//import UsestateUsage from "./Components/Student/UsestateUsage"


function App() {


  return (
    <>
    <Header/>
   <div className="flex mt-16 p-4">
    <Sidebar/>
   <Mainview/>
    </div>
  
     <Footer/>

    </>
  )
}

export default App
