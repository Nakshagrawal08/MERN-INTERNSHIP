import React from 'react'

function ContactButton(prop) {
  return (
    <button
        onClick={prop.func}
        className={`bg-${prop.colour}-600 hover:bg-${prop.colour}-700  text-white font-bold py-2 px-4 rounded-lg`}
    >
        {prop.text}
    </button>
  )
}

export default ContactButton
