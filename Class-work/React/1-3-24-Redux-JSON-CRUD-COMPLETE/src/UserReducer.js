import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name:"employees",
    initialState:[],
    reducers:{
        userData:(state,action)=>{
          state.push(action.payload)
    //    console.log(action.payload);
        },

        addUsers: (state,action)=>{
            // state.push(action.payload)
            fetch('http://localhost:5000/employees',{
                method:"post",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res)
                {
                    alert("Added...!")
                }
            })
        },

        editUsers: (state,action)=>{

            console.log(action.payload.id)
            fetch(`http://localhost:5000/employees/${action.payload.id}`,{
                method:"put",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res)
                {
                    alert("Edited...!")
                }
            })


        },

        deleteUsers: (state,action)=>{
            fetch(`http://localhost:5000/employees/${action.payload.id}`,{
                method:"delete",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res)
                {
                    alert("deleted...!")
                }
            })

           


        }
    }
})

export const {userData,addUsers,editUsers,deleteUsers} =  userSlice.actions; 
export default userSlice.reducer;