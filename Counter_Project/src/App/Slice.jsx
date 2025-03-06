import { createSlice } from "@reduxjs/toolkit";
const students =[
    { Type: 'Skills', title:'Web Development', val:'Web App Development'},
    { Type: 'Skills', title:'App Development', val:'Building Android apps'},
    { Type:'Experience', title:'2024-current', val:'ABC Company'},
    { Type:'Experience',title:'2022-2024',val:'XYZ Company'},
    { Type: 'Education', title:'2022-2026', val:'Btech With CS Branch'},
    { Type: 'Education', title:'2021-2022', val:'High School With PCM+CS'}
]

const StudentSlice = createSlice({
    name:'studentdata',
    // data pahele se diya ho to uska variable name nhi to empty array
    initialState : students || [],
    reducers : {
        // case : reducer function
        // arrow function me apna opration
        // .payload tb hi use hoga jb hume data dena ho operation perform krne k liye
        insertstudent : (state , action)=>{
            state =[ ...state , action.payload]
        },
        deletedata : (state , action)=>{
            state.splice(action.payload , 1)
            return state
        }

    }

})

// cases export krne hoga DESTRUCTING K THROUGH
// reducers ko pass krne k liye var.reducer kr k pass krne hoge YE DEFAULT H TO YE ESA KA ESA HI JAYEGA
export const {insertstudent , deletedata}=StudentSlice.actions
export default StudentSlice.reducer