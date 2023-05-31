import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?s=action&apikey=9e3e2ff7&page=1"
      );
      const moviesData = response.json();
      return moviesData;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const movieSlice = createSlice({
  initialState: {
    movies: [],
    loading: false,
  },
  name: "movies",
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload.Search;
      state.loading = false;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.movies = [];
      state.loading = false;
    });
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { setLoading } = movieSlice.actions;
export default movieSlice.reducer;
