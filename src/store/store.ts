import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./postsSlice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
