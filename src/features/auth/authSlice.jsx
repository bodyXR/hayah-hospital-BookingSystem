import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {isAuth : false , username : ""};

const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        // toggleAuth(state,actions)
        // {
        //     state.isAuth = actions.payload;
        //     localStorage.setItem(
        //         "auth",
        //         JSON.stringify({
        //           isAuth: actions.payload,
        //           username: JSON.parse(localStorage.getItem("auth"))?.username,
        //         })
        //     );
        // },
        // setUsername(state , actions)
        // {
        //     state.username = actions.payload.name;
        // }
        setAuthStatus(state,actions)
        {
            state.isAuth = actions.payload;
            return state;
        },
        setUsername(state , actions)
        {
            state.username = actions.payload;
            return state;
        }
    },
})

export const selectUsername = (state) => state.auth.username;
export const {setAuthStatus , setUsername} = AuthSlice.actions; 

export default AuthSlice.reducer;