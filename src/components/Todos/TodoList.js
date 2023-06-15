import Todo from "./Todo";
import styles from "./TodoList.module.css"
function TodoList({todos,deleteTodo}){

    return (
    <div className={styles.todoListContainer}>{todos.map((todo,index)=>{

        return <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>
    })}
    </div>
    )
}
export default TodoList