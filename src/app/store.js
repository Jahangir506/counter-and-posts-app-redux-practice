import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postslice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        postsR: postReducer,
    }
})

export default store;