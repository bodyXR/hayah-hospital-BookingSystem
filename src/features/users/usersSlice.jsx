import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

const UsersSlice = createSlice({
    name : "users",
    initialState,
    reducers:{
        addUser : {
            reducer(state , action){
                state.push(action.payload)
                localStorage.setItem("users" , JSON.stringify(state))
                console.log(JSON.parse(localStorage.getItem("users")))
            },
            prepare(uName, uPassword){
                return {
                    payload : {id : nanoid() , uName, uPassword,role:uName == "admin" ? "admin" : "user"}
                }
            }
        }
    },
})

export const selectAllUsers = (state) => state.users;
export const { addUser } = UsersSlice.actions;

export default UsersSlice.reducer;