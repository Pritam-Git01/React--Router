import {createSlice}  from  '@reduxjs/toolkit';



const todoSlice = createSlice({
  initialState : {
    todos : []
  },
  name: "todo",
  reducers : {
    addItem : (state,action) => {
        state.todos.push(action.payload)
    },
    deleteItem : (state,action) => {
      const newData = state.todos.filter((iten,index) => {
        return (
          index !== action.payload
        )
      })
        
      state.todos = newData;
      
    },
  }
});

export const {addItem, deleteItem} = todoSlice.actions;
export default todoSlice.reducer;