import React from 'react'


function Data(prop) {
  return (<>
   <div>hii
      {prop.title} : {prop.details[`${prop.property}`]}<br/>
    </div>
  
  </>
   
  )
}

export default Data
