import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data:[]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
createDataFunc:(state,action)=>{
  state.data = [...state.data,action.payload] // bu kismi chatgpye bi sor ne yapiyo diye
}
    


}
    },

)

export const {createDataFunc} = dataSlice.actions;
export default dataSlice.reducer