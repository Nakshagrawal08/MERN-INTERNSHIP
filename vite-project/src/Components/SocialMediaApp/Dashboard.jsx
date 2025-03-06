

function Dashboard() {
  return (
    <>
    <div className="h-screen p-4">
        <div className=" h-1/12 border-2 text-center flex gap-2 p-1 border-black">
            <div className=" w-2/12 border-4 border-black"> logo </div>
            <div className=" w-7/12 border-4 border-black"> search box</div>
            <div className=" w-3/12 border-4 border-black"> menu (home+Profile+logout) </div>

        </div>


        <div className=" h-10/12 border-2 text-center flex gap-2 border-black">
        
        <div className="w-3/10 m-2 border-black border-2"> user details</div>
        <div className="w-5/10 m-2 border-black border-2"> post and comment (post title ,bod ,content)</div>
        <div className="w-2/10 m-2 border-black border-2"> except 9 users username and post count</div>


        </div>
        <div className=" h-1/12 border-2 text-center  border-black">Footer</div>
    </div>
      
    </>
  )
}

export default Dashboard
