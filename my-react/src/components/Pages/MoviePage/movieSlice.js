import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',
    async () => {
        const response = await fetch('https://www.omdbapi.com/?s=action&apikey=9e3e2ff7&page=1')
        const moviesData = response.json()
        return moviesData;
        
    }
)


 const movieSlice = createSlice({
    initialState : {
        movies: [],
        loading: false
    },
    name: "movies",
    reducers : {
        setLoading : (state,action) => {
            console.log('state', action)
            state.loading = action.payload;
        }

    },

    extraReducers: (builder) => {

         builder.addCase(getAllMovies.fulfilled, (state, action) => {
            console.log("action", action)                               
            state.movies =  action.payload;
            state.loading = false;
        })
        builder.addCase(getAllMovies.rejected, (state, action) => {
            console.log("action", action)
            state.movies = [];
            state.loading = false;
        })
       builder.addCase(getAllMovies.pending, (state, action) => {
            console.log("action", action)
            
        })
    }

});

export const {setLoading} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;