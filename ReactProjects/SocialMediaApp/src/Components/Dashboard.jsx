import Userdetails from './UserDetails'
import Exceptuser from './Exceptuser'
import MenuButton from './MenuButton'
import PostComment from './PostComment'
import Search from './Search'
import SMLogo from './SMLogo'
function Dashboard() {
  return (
    <>
    <div className=" p-4  bg-gray-100">
      <div className='  items-center grid  grid-cols-3 justify-between bg-white p-4 shadow-md rounded-xl mb-6'>
       
            <div>
              <SMLogo/>
            </div>
            <div>
              <Search/>
            </div>
            <div className=" ">
              <ul className='grid grid-cols-3 gap-3 text-center mx-4  p-1'>
                <MenuButton title='home'/>
                <MenuButton title='profile'/>
                <MenuButton title='hologoutme'/>
              </ul> 
            </div>
        </div>
      
        <div className=" h-screen  flex gap-1 ">
            <div className="w-[25%]   "> 
              <Userdetails/>
            </div>
            <div className="w-[50%] mx-2 bg-white p-4 shadow-md h-max rounded-2xl space-y-2 ">
              <div className="text-lg font-bold mb-4">Recent Posts</div>
              <PostComment/>
            </div>
            <div className="w-[25%]  bg-white p-4 shadow-md h-max rounded-2xl space-y-2 right-2 ">
              <h1 className=' text-2xl font-bold '>Other Users...</h1>
              <Exceptuser/>
             
            </div>
        </div>
        <div className="text-center bg-white p-4 mt-2 shadow-md rounded-xl">
          <p className="text-gray-600">&copy; 2025 Linked. All rights reserved.</p>
        </div>
    </div>
      
    </>
  )
}

export default Dashboard
