import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    console.log("fetching data")
    let Response = await axios.get('https://jsonplaceholder.typicode.com/users')
    if (Response.status === 200) {
        console.log('fetching if', Response.data)
        return Response.data

    }
}
)


const Slice = createSlice({

    name: 'user',
    // data pahele se diya ho to uska variable name nhi to empty array
    initialState: {
        list: [],
        isLoading: false,
        error: false,
        SelectedUser: null
    },
    reducers: {
        // case : reducer function
        // arrow function me apna opration
        // .payload tb hi use hoga jb hume data dena ho operation perform krne k liye


        deletedata: (state, action) => {
            console.log(action)
            let index = state.list.findIndex((user) => user.id == action.payload)
            state.list.splice(index, 1)
            state.SelectedUser = null
            return state
        },
        SelectUser: (state, action) => {
            state = { ...state, SelectedUser:action.payload }
            console.log(state)
            return state
        },
        filter: (state, action) => {
            state = state.list.filter((e) => e.name.toLowerCase().startWtith(action.payload.toLowerCase()))
        }

    },
     extraReducers: (builder) => { builder.addCase(fetchUser.fulfilled, (state, action) => {
        console.log('fulfilled', action.payload)
        state = { ...state, list: action.payload }
        state.isLoading = false
        return state}),
        builder.addCase(fetchUser.pending, (state, action) => {
            console.log('pending', action.payload)
            state.isLoading = true
            return state
        }),
        builder.addCase(fetchUser.rejected, (state, action) => {
            console.log('rejected', action.payload)
            state.isLoading = false
            state.error = true
            return state
        })}
    
    })

// cases export krne hoga DESTRUCTING K THROUGH
// reducers ko pass krne k liye var.reducer kr k pass krne hoge YE DEFAULT H TO YE ESA KA ESA HI JAYEGA
export const { SelectUser, deletedata, filter } = Slice.actions
export default Slice.reducer