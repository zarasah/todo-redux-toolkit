import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../store/todoSlice";

export default function TodoItem({item}) {
    const dispatch = useDispatch();

    function handleClick(id) {
        dispatch(deleteTodo({id}));
    }

    function handleChange(id) {
        dispatch(toggleTodoComplete({id}));
    }
    return (
        <li className = 'task'>
            <input type = 'checkbox' checked = {item.completed} onChange = {() => {handleChange(item.id)}}/>
            <span className = 'task'>{item.text}</span>
            <button onClick = {() => handleClick(item.id)}>Delete</button>
        </li>
    )
}