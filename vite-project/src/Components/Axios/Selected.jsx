import React from 'react'
import Data from './Data'
function Selected(prop) {
    const ListOfUsers =prop.Details
  return (
    <div className=' '>{
        ListOfUsers.map((user)=> prop.Selected ==user.id?
        <div className='m-5 border-1 h-max border-black rounded-2xl p-8'>
            < Data title={'Id'} details={user} property={'id'} />
            < Data title={'Name'} details={user} property={'name'} />
            < Data title={'Email'} details={user} property={'email'} />
            < Data title={'Phone'} details={user} property={'phone'} />
            < Data title={'Username'} details={user} property={'username'} />
            {/* <Address title={'Username'} details={user} property={'username'}/> */}
        </div>
        :'')
       }
    </div>
  )
}

export default Selected
