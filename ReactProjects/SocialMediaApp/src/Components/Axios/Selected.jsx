
import Data from './Data'
import Address from './Address'
import { useSelector } from 'react-redux'

function Selected(prop) {
    const ListOfUsers =prop.Details
    const SelectedUser = prop.id
    
  return (
  
    <div className=' '>
    {console.log('ListOfUsers :',ListOfUsers

    )
        // ListOfUsers.map((user)=> SelectedUser==user.id?
        +<div className='m-5 border-1 h-max border-black rounded-2xl p-8'>
        
            < Data title={'Id'} details={ListOfUsers} property={'id'} />
            < Data title={'Name'} details={ListOfUsers} property={'name'} />
            < Data title={'Email'} details={ListOfUsers} property={'email'} />
            < Data title={'Phone'} details={ListOfUsers} property={'phone'} />
            < Data title={'Username'} details={ListOfUsers} property={'username'} />
            <Address title={'Address'} details={ListOfUsers} property={'address'}/>
        </div>
        // :'')
       }
    </div>
  )
}

export default Selected
