import { createSlice } from "@reduxjs/toolkit";

import  appApi  from "../services/appApi";

const initialState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => null,
        updateUser: (_, action) => {
            console.log("action.payload:" ,action.payload)
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, {payload}) => payload)
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, {payload}) => payload)
    }
})

export const {logout,updateUser} = userSlice.actions
export default userSlice.reducer
