import { configureStore } from "@reduxjs/toolkit";
import billSliceReducer from '../slices/billSlice'

export const billStore = configureStore({
    reducer: {
        billData : billSliceReducer,
    }
});