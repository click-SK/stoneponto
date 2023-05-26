import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./currency";

export default configureStore({
    reducer: {
        currency: authReducer,  
    }
})