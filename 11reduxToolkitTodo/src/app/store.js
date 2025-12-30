import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoslice.js";

export const store = configureStore({
  reducer: todoReducer,
});

// dispatch and selector hook next
