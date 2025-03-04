import React from 'react'

function AboutContent(prop) {
  return (
    <div>
        
         {
           prop.data.map((item) => prop.Selection == item.Type ?<a href={item.link}><li className="text-blue-400" >{item.title}</li></a>:'')
        }
    </div>
  )
}

export default AboutContent
