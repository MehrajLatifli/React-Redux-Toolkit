import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todos = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos = [
            ...state.todos,
            action.payload
        ]
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.title !== action.payload)
      },
      // editTodo: (state, action) => {
      //   const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      //   if (index !== -1) {
      //       state.todos[index] = action.payload;
      //   }
      // },
      // editTodo: (state, action) => {
      //   const { id, title, done } = action.payload;
      //   const index = state.todos.findIndex(todo => todo.id === id);
      //   if (index !== -1) {
      //     state.todos[index] = {
      //       ...state.todos[index],
      //       title: title,
      //       done: done,
      //     };
      //   }
      // },
      editTodo: (state, action) => {
        const { id, title, done } = action.payload;
        const index = state.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          state.todos[index] = {
            ...state.todos[index],
            title: title,
            done: done,
          };
        }
      }
      
      
      

      
    }
})

export const {addTodo, deleteTodo,editTodo } = todos.actions
export default todos.reducer