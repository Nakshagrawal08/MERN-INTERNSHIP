import linkedin from './linkedin.png'

function Dashboard() {
  return (
    <>
      <div className="h-screen p-4 bg-gray-100">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-xl mb-6">
          <div className="flex items-center text-4xl font-bold text-blue-600">
            <p>Linked</p>
            <img src={linkedin} alt="LinkedIn Logo" className="py-1 pr-2 h-12 w-20" />
          </div>
          <div className="w-6/12 sm:w-4/12 md:w-3/12">
            <input placeholder='Search...' className='w-full px-4 border-2 border-gray-300 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex gap-4">
              <li className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer">Home</li>
              <li className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer">Profile</li>
              <li className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-wrap gap-6 justify-between">
          {/* Left Sidebar */}
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center space-x-4 mb-4">
              <img src={linkedin} alt="User" className="h-16 w-16 rounded-full shadow-lg" />
              <div className="text-sm">
                <p className="font-bold text-xl">Nakshatra Agrawal</p>
                <p className="text-gray-500">nakshatragrawal8@mail.com</p>
              </div>
            </div>
            <p className="text-gray-600">Phone: 9479486236</p>
            <p className="text-gray-600">Posts: 54</p>
            <p className="text-gray-600">Comments: 54</p>
          </div>

          {/* Main Feed */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white shadow-md rounded-xl p-4">
            <div className="text-lg font-bold mb-4">Recent Posts</div>
            <div className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img src={linkedin} alt="User" className="h-10 w-10 rounded-full" />
                <div className="text-sm">
                  <p className="font-bold">Nakshatra Agrawal</p>
                  <p className="text-gray-500">Posted 2 hours ago</p>
                </div>
              </div>
              <p className="mt-2 text-gray-800">This is an example of a post. Feel free to replace it with dynamic content!</p>
            </div>
            <div className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img src={linkedin} alt="User" className="h-10 w-10 rounded-full" />
                <div className="text-sm">
                  <p className="font-bold">Nakshatra Agrawal</p>
                  <p className="text-gray-500">Posted 5 hours ago</p>
                </div>
              </div>
              <p className="mt-2 text-gray-800">Another post example. Replace with dynamic content as needed.</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white shadow-md rounded-xl p-4">
            <div className="text-lg font-bold mb-4">Other Users</div>
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md" key={index}>
                  <img src={linkedin} alt="User" className="h-10 w-10 rounded-full" />
                  <div className="text-sm">
                    <p className="font-bold">Nakshatra Agrawal</p>
                    <p className="text-gray-500">25 Posts</p>
                    <p className="text-blue-500 cursor-pointer">View More...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white p-4 mt-6 shadow-md rounded-xl">
          <p className="text-gray-600">&copy; 2025 Linked. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
