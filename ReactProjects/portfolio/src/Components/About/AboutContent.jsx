import React from 'react'

function AboutContent(prop) {
   let title1=prop.d1.title
   let val1=prop.d1.val
   let title2=prop.d2.title
   let val2=prop.d2.val
   
  return (
    <div>
        
        { 
          prop.Selection=='Skills' ?
          <div className='md:grid md:grid-cols-2 md:gap-6'>
           <li ><span className="text-blue-400 text-xl  " >{title1}</span><br/>{val1.map((item)=><p>{item}</p>)}</li>
            <li ><span className="text-blue-400 text-xl " >{title2}</span><br/>{val2.map((item)=><div><p className=' font-bold'>{item.title} </p> <p className='text-justify pl-2'>{item.val}</p></div>)}</li>
            </div> 
          :
            prop.data.map((item) => prop.Selection == item.Type ?<li ><span className="text-blue-400 text-xl " >{item.title}</span><br/>{item.val}</li>:'')
        }
    </div>
  )
}

export default AboutContent
