import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";

export const fetchdata=asyncThunkCreator("fetchUser",async()=>{  
      let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
      if(Response.status==200){
          return Response.data  
      }      
  }
)


const Slice = createSlice({
    name:'user',
    // data pahele se diya ho to uska variable name nhi to empty array
    initialState : [] ,
    reducers : {
        // case : reducer function
        // arrow function me apna opration
        // .payload tb hi use hoga jb hume data dena ho operation perform krne k liye
       

        deletedata : (state , action)=>{
            console.log(action)
            let index = state.findIndex((user)=>user.id==action.payload)
            state.splice(action.payload , 1)
            return state
        },
        extraReducer: (builder)=>{
            builder.addCase(fetchdata.fulfiffed , (state ,action )=>{
                state=action.payload
                return state            
            })
        },
        filter:(state , action)=>{
            state=state.filter((e)=>e.name.toLowerCase().startWtith(action.payload.toLowerCase()))
        }

    }

})

// cases export krne hoga DESTRUCTING K THROUGH
// reducers ko pass krne k liye var.reducer kr k pass krne hoge YE DEFAULT H TO YE ESA KA ESA HI JAYEGA
export const {insertstudent , deletedata , filter}=Slice.actions
export default Slice.reducer