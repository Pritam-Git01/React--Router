import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../components/Pages/MoviePage/movieSlice';

 export const store = configureStore({
  reducer: {
    newState : movieSlice
  },
});
