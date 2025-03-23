import React from 'react'
import image from '../pictures/CONTACT.png';
function ContactHeadRight() {
  return (
    <div className="flex items-center gap-3">
        <i className="fa-solid text-gray-600 fa-bars hover:bg-gray-200 text-3xl p-2 rounded-full"></i>
        <img src={image} alt="Contact Icon" className="h-10" />
        <h1 className="text-2xl font-semibold text-indigo-700">Contacts</h1>
  </div>
  )
}

export default ContactHeadRight
