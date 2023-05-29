import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency";
import { authReducer } from "./auth";
// import tokenMiddleware from "./tokenMiddleware";

const tokenMiddleware = store => next => action => {
    // Отримати токен з куки
    const token = document.cookie.split('=')[1];
  
    // Додати токен до заголовків кожного запиту
    if (token) {
      action.headers = {
        ...action.headers,
        'Authorization': 'Bearer ' + token,
      };
    }
  
    return next(action);
  };

export default configureStore({
    reducer: {
        currency: currencyReducer,
        auth: authReducer,  
        token: [...getDefaultMiddleware(), tokenMiddleware]
    }
})