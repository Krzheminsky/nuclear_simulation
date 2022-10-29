import { configureStore } from "@reduxjs/toolkit";
import cloudeReducer from './cloudeSlice';

export default configureStore({
    reducer: {
        cloud: cloudeReducer,
    },
});