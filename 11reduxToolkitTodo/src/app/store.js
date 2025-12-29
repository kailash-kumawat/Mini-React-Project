import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoslice";

export const store = configureStore({
  reducer: todoSlice,
});
