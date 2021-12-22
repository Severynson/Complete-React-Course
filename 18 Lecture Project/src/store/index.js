import counterReducer from "./counter";
import authSlice from "./auth";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
//   reducer: counterSlice.reducer
  reducer: { counter: counterReducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;
