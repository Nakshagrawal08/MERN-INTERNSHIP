import React from 'react'

function ContactHeadMiddle() {
  return (
    <div className="w-[60%] flex items-center bg-gray-100 rounded-lg p-1">
                <i className="fa-solid text-gray-600 fa-search text-xl ml-2"></i>
                <input
                  placeholder="Search"
                  className="flex-grow bg-transparent border-none outline-none p-2"
                />
              </div>
  )
}

export default ContactHeadMiddle
