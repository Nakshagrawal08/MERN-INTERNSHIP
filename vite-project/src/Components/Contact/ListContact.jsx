import React from 'react'

function ListContact({Name , Email , Number}) {
  return (<>
    <div className='m-2 p-2 gap-3 bg-gray-600 grid grid-cols-3'>
            <div className='flex gap-3'>
              <h1 className=''/>{+1}.
              <h1 className=''/> {Name}
            </div>
            <h1>{Email}</h1>
            <h1>{Number}</h1>
    </div>
    </>
  )
}

export default ListContact
