import styles from "./TodoForm.module.css"
import {useState} from 'react'

function TodoForm({addTodo}){
const[text,setText]=useState('')

function onSubmitHandler(event){
    event.preventDefault()
    addTodo(text)
    setText('')
}
    return (
        <div className={styles.todoFormContainer}>
        <form onSubmit={onSubmitHandler}>
            <input placeholder="Enter new todo" value={text} onChange={(event)=>setText(event.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default TodoForm