import { useEffect } from "react"
export const [ListOfUsers,SetListOfUser]=useState([])        
export default const DataBook =useEffect ( ()=>{
        async function Getdata() {
            let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
            if(Response.status==200){
                SetListOfUser(Response.data)
                
            }
            
        }
        Getdata()
        
    },[])