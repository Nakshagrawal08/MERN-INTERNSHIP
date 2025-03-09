import React from 'react'
import linkedin from './linkedin.png'

function SMLogo() {
  return (
    <>
      <div className="flex items-center text-4xl font-bold text-blue-600">
            <p>Linked</p>
            <img src={linkedin} alt="LinkedIn Logo" className="py-1 pr-2 h-12 w-12" />
          </div>
       
    </>
  )
}

export default SMLogo
