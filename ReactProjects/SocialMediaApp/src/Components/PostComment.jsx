import React from 'react'
import linkedin from './linkedin.png'
function PostComment() {
  return (
  <>
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
  </>
    )
}

export default PostComment
