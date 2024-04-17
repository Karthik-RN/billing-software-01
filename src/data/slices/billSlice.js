import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputFormDataList : [{iName : '', iDesc : '', iQty : 0, iPrice : 0}],
}

export const billSlice = createSlice({
    name:'billData',
    initialState,
    reducers:{
        handleFormChange: (state,action) => { console.log('inside handleFormChange'); let data = [...state.inputFormDataList]; console.log('payload : '); console.log(action.payload);  },
        addFields: (state) => { console.log('inside addfields'); console.log('1'); let newfield = {iName : '', iDesc : '', iQty : 0, iPrice : 0} ; console.log('2'); state.inputFormDataList.push(newfield); console.log('3'); },
        removeFields: (state,action) => { console.log('inside removeFields'); let data = [...state.inputFormDataList]; data.splice(action.payload, 1); state.inputFormDataList = [...data] }
    }
})

export const {handleFormChange,addFields,removeFields} = billSlice.actions;

export default billSlice.reducer