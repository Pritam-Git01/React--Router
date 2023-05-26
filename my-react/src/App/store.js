import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../components/Pages/MoviePage/movieSlice';

 export const store = configureStore({
  reducer: {
    newState : movieReducer
  },
});
