import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: uuidv4(),
                text: action.payload.text,
                completed: false
            }
            state.todos.push(newTodo);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((item) => {
                return item.id !== action.payload.id;
            })
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(item => {
                return item.id === action.payload.id;
            })
            toggledTodo.completed = !toggledTodo.completed;
        },
        deleteAll(state, action) {
            state.todos = [];
        },
        deleteCompleted(state, action) {

        }
    },
})

export const { addTodo, deleteTodo, toggleTodoComplete, deleteAll, deleteCompleted } = todoSlice.actions;

export default todoSlice.reducer;