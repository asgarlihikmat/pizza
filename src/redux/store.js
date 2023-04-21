import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import usersSlice from './usersSlice'

export const store = configureStore({
   reducer: {
    filterSlice,
    usersSlice
  },
})