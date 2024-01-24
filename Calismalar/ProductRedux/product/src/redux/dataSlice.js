import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data:[]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
createDataFunc:(state,action)=>{
  state.data = [...state.data,action.payload] 
},
getNumberOfData: (state,number) => {
 number=state.data.length;
},




}
    },

)

export const {createDataFunc,getNumberOfData} = dataSlice.actions;
export default dataSlice.reducer