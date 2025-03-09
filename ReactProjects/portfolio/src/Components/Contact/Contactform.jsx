import React from 'react'

function Contactform(prop) {
  return (<>
    <h4 className="font-bold">{prop.title}</h4>
    <input placeholder={prop.PH} className="p-1 my-2 w-full text-white"/><br/>
    </>)
}

export default Contactform
