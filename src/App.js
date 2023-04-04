import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [showFooter, setShowFooter] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)

  if (todos.length === 0 && showFooter === true) {
      setShowFooter(false);
  }
  
  function handleInput(text) {
    setText(text);
  }

  function handleClick(event) {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo({text}));
    setShowFooter(true);
    setText('');
  }
  
  return (
    <div className = 'App'>
      <Header />
      <div className = 'wrapper'>
        <Input text = {text} handleChange = {handleInput} handleClick = {handleClick}/>
        <TodoList />
        {
          showFooter ? <Footer /> : ''
        }
      </div>
    </div>
  )
}

export default App;
