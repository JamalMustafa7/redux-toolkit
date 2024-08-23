import { createSlice } from "@reduxjs/toolkit";
const backgroundSlice=createSlice({
    name:"background",
    initialState:{value:""},
    reducers:{
        changeBackground:(state,action)=>
        {
            state.value=action.payload
        }
    }
})
export default backgroundSlice.reducer;
export const {changeBackground}=backgroundSlice.actions;