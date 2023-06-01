import { configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency";
import { authReducer } from "./auth";
import { languageReducer } from "./language";

export default configureStore({
    reducer: {
        currency: currencyReducer,
        auth: authReducer,
        lang: languageReducer
    }
})