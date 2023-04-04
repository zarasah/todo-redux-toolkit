import { useState, useEffect, useRef  } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodoComplete } from "../store/todoSlice";

export default function TodoItem({item}) {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState(item.text);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            handleFocus();
        }
    }, [isEditing])

    function handleClick(id) {
        dispatch(deleteTodo({id}));
    }

    function handleChange(id) {
        dispatch(toggleTodoComplete({id}));
    }

    function handleTextChange(event) {
        setText(event.target.value)
    }

    const handleBlur = (event) => {
        if (text.trim()) {
            dispatch(editTodo({text, id: item.id}));
            setEditing(false);
        } else {
            inputRef.current.placeholder = 'Please enter new Task';
            handleFocus();
        }    
    };

    function handleKeyPress(event) {
        if (event.keyCode === 13) {
            if (text.trim()) {
                dispatch(editTodo({text, id: item.id}));
                setEditing(false);
            } else {
                inputRef.current.placeholder = 'Please enter new Task';
            }
        }
    }

    const handleFocus = () => {
        inputRef.current.focus();
        // inputRef.current?.focus();
      };

    // const canBlur = text.trim() !== "";
    return (
        <li className = 'task'>
            <input type = 'checkbox' checked = {item.completed} onChange = {() => {handleChange(item.id)}}/>
            {
                isEditing ? (
                    <input className = 'textarea' ref={inputRef} value = {text} onChange = {handleTextChange} onBlur={handleBlur} onKeyDown = {handleKeyPress}></input>
                ) : (
                    <span className = 'task' onClick = {() => setEditing(true)}>{item.text}</span>
                )
            }
            <button onClick = {() => handleClick(item.id)}>Delete</button>
        </li>
    )
}