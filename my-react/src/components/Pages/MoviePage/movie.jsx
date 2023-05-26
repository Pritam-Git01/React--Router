import React from 'react';

import {useSelector,useDispatch} from 'react-redux';
import { getAllMovies,setLoading } from './movieSlice';



function Movie() {

const movieState = useSelector((state) => state.newState);
const dispatch = useDispatch();


function handleClick () {
  dispatch(setLoading(!movieState.loading))
  dispatch(getAllMovies)
}

console.log("movie", movieState)
  return (
    <>
    <div><button onClick={handleClick}>Get Movies</button></div>
    
      {movieState.movies.map((item) => {
        return (
          <>
          <ol key={item.imdbID}>
          <li><img src={item.poster} alt='movie-poster'/></li>
          <li>{item.title}</li>
          <li>{item.year}</li>
          <li>{item.imdbID}</li>
          <li>{item.type}</li> 
        </ol>
          </>
        )
        
      })}

  
    </>
  )
}

export default Movie;