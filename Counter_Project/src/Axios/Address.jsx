import React from 'react'

function Address(prop) {
    let {street, suite, city, zipcode, geo}=prop.property
  return (
    <>
      <div className='flex gap-4'>
        
      {prop.title} : <div className='flex gap-2'>
        <h1>
        {prop.details[prop.property].street} , 
        {prop.details[prop.property].city}<br/>
        {prop.details[prop.property].zipcode} ,  
        {prop.details[prop.property].street}
        </h1>
      </div>
    </div>
    </>
  )
}

export default Address
