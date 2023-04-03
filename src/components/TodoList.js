import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    
    return ( 
    <ul className = 'taskList'>
        {
        todos.map((item) => {
            return <TodoItem key = {item.id} item = {item}/>
        })
        }
    </ul>
    )
}