import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../components/Molecules/todoSlice'

export const store = configureStore({
  reducer: {
    newState : todoSlice
  },
})