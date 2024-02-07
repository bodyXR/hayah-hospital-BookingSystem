import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice.jsx";
import authReducer from "./features/auth/authSlice.jsx";
import doctorReducer from "./features/doctor/doctorSlice.jsx";

export const store = configureStore({
    reducer:{
        users : usersReducer,
        auth : authReducer,
        doctor : doctorReducer,
    }
})