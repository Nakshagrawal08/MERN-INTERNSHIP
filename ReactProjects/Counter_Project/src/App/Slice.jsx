import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser=createAsyncThunk("fetchUser",async()=>{  
      let Response =await axios.get('https://jsonplaceholder.typicode.com/users')
      if(Response.status===200){
          return Response.data 
          
      }      
  }
)


const Slice = createSlice({
    name:'user',
    // data pahele se diya ho to uska variable name nhi to empty array
    initialState : {
        list : [],         
        isLoading : false,
        error : false ,
        SelectedUser:null
    },
    reducers : {
        // case : reducer function
        // arrow function me apna opration
        // .payload tb hi use hoga jb hume data dena ho operation perform krne k liye
       

        deletedata : (state , action)=>{
            console.log(action)
            let index = state.list.findIndex((user)=>user.id==action.payload)
            state.list.splice(index , 1)
            state.SelectedUser=null
            return state
        },
        selectUser: (state , action) =>{
            state={...state ,selectedUser:action.payload}
        },
        filter:(state , action)=>{
            state=state.list.filter((e)=>e.name.toLowerCase().startWtith(action.payload.toLowerCase()))
        }

    },
        extraReducer: (builder)=>{
            builder.addCase(fetchUser.fulfiffed , (state ,action )=>{
                state={...state,list:action.payload}
                state.isLoading=false
                return state            
            }),
            builder.addCase(fetchUser.pending , (state ,action )=>{
                state.isLoading=true
                return state            
            })
            builder.addCase(fetchUser.fulfiffed , (state ,action )=>{
                state.isLoading=false
                state.error=true
                return state            
            })
        },

        

})

// cases export krne hoga DESTRUCTING K THROUGH
// reducers ko pass krne k liye var.reducer kr k pass krne hoge YE DEFAULT H TO YE ESA KA ESA HI JAYEGA
export const {selectUser , deletedata , filter}=Slice.actions
export default Slice.reducer