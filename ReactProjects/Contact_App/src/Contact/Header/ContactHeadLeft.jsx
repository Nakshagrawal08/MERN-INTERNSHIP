import React from 'react'
import grid from '../pictures/grid.png';
import pic from '../pictures/calling.jpg';
function ContactHeadLeft() {
  return (
    <div className="flex items-center gap-4">
        <i className="fa-solid text-gray-600 text-xl"></i>
        <i className="fa-solid text-gray-600 text-xl"></i>
        <img src={grid} alt="Grid Icon" className="h-8" />
        <img src={pic} alt="Profile" className="h-8 rounded-full border border-gray-300" />
    </div>
  )
}

export default ContactHeadLeft
