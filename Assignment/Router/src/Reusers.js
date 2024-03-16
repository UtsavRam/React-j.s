import { createSlice, createslice } from "@reduxjs/toolkit";
import { Userdata } from "./reducoseDatalist"

export const  userSlice =  createSlice({
    name:"users",
    initialState: Userdata,
    reducers: {
         Adduser:(state,action)=>{
            // console.log(action.payload);
            // console.log(state);

        //    console.log(state.push(action.payload));

                state.push(action.payload)
         }
    }
})

export const {Adduser} = userSlice.actions
export default userSlice.reducer;
