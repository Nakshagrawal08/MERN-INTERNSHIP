import { configureStore } from '@reduxjs/toolkit'
import StudentReducer from './Slice'
const store = configureStore({
  reducer: {
    // jo bhi name tumne slice.jsx me diya h uska value name : application reducer variable ka naam
    //KEY (SLICE KA NAME) : Value (importing name) 
    studentname : StudentReducer
  }
})
export default store