import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css"

function Todo() {
    return (
        <>
            <div className="todo"></div>
            <TodoInput/>
            <TodoList/>
        </>
    )
}
export default Todo;