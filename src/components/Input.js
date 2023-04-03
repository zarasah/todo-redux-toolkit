export default function Input({text, handleChange, handleClick}) {  
    return (
        <form>
            <input className = 'input-fild' value = {text} placeholder = 'Add Task' onChange={(event) => handleChange(event.target.value)} />
            <button onClick = {handleClick}>ADD</button>
        </form>
    )
}