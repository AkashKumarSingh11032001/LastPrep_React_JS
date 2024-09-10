import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello Aks" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateRodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   });
    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
