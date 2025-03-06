import React from 'react'

function Address(prop) {
    let {street ,"suite" ,}=prop.property
  return (
    <>
      <div>
      {prop.title} : {prop.details[`${prop.property}`]}<br/>
    </div>
    </>
  )
}

export default Address
