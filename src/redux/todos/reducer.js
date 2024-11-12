import { createSlice } from "@reduxjs/toolkit";
// Estado inicial
const initialState = [];

// Reducer
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, { id: Date.now(), name: action.payload }];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
