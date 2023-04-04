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
        editTodo(state, action) {
            state.todos.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text;
                }
            })
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
            const newTodos = state.todos.filter(item => !item.completed);
            state.todos = newTodos;
        }
    },
})

export const { addTodo, deleteTodo, toggleTodoComplete, deleteAll, deleteCompleted, editTodo } = todoSlice.actions;

export default todoSlice.reducer;