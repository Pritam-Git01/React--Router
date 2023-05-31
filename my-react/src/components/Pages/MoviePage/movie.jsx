import React, { useEffect } from 'react';
import styles from './movie.module.css'



import {useSelector,useDispatch} from 'react-redux';
import { getAllMovies,setLoading} from './movieSlice';



function Movie() {

const movieState = useSelector((state) => state.newState);
const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setLoading(!movieState.loading))
    dispatch(getAllMovies())
  },[])



  return (
    <>
    
    
      {movieState.movies.map((item) => {
        return (
          <>
          
            <div className={styles.result} key={item.imdbID}>
              <h2>{item.Title}</h2>
              <p>{item.Year}</p>
              <img src={item.Poster} alt='poster'/>
              <button>Add To Fav</button>

            </div>
          
        
        </>
        )
        
      })}

  
    </>
  )
}

export default Movie;