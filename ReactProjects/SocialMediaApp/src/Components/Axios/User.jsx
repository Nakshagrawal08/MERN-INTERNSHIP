import { useEffect } from 'react'
import Userdetails from './Userdetails'
import Selected from './Selected'
import { useDispatch , useSelector } from 'react-redux'
import { fetchUser, selectUser } from '../App/Slice'

export default function user() {
  
  const {list , error , isLoading ,SelectedUser}=useSelector(state => state.user)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <div className='flex'>
        <div>{
    
        list.map((user)=>
          <h1 onClick={()=>dispatch(SelectUser(user.id))}  className='text-black p-4 border-black border-1 m-2 w-72 hover:font-bold'> id: {user.id}<br/> Name :{ user.name}</h1>
        )
        }
        </div>
        <Selected Details ={list}  />
    </div>
  )

}


