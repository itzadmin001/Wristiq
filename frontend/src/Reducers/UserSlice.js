import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
    },
    reducers: {
        login: (currentState, { payload }) => {
            currentState.data = payload;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        logout: (currentState, { payload }) => {
            const lsUser = JSON.parse(localStorage.getItem('user'));
            if (lsUser) {
                const updatedUser = {
                    ...lsUser,
                    auth: false
                };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                currentState.auth = false;
                currentState.data = lsUser.data;
            }
        },
        lsToState: (currentState) => {
            const lsUser = JSON.parse(localStorage.getItem('user'))
            currentState.data = lsUser;
        },
        SignupUser: (currentState, { payload }) => {
            currentState.data = payload
            localStorage.setItem('user', JSON.stringify(payload));
        }
    },
})


export const { login, logout, lsToState, SignupUser } = UserSlice.actions;
export default UserSlice.reducer;