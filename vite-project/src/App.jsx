import Footer from "./Components/Footer"
import Header from "./Components/Header"

import Mainview from "./Components/Mainview"
import Sidebar from "./Components/Sidebar"
import UsestateUsage from "./Components/Student/UsestateUsage"


function App() {


  return (
    <>
    <Header/>
    <div className="flex mt-16 bg-neutral-500" >
      <Sidebar/>
      <Mainview/>
      
    </div>     
    <Footer/>
    </>
  )
}

export default App
