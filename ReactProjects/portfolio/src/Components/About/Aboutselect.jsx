import React from 'react'

function Aboutselect(prop) {
  return (
    <div>
        <p onClick={()=>prop.Choosen(prop.pass)} className="  mr-16 mb-3 hover:underline text-xl font-bold hover:underline-offset-8 hover:decoration-blue-500 decoration-2" >{prop.pass}</p>
    </div>
  )
}

export default Aboutselect