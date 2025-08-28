import { useEffect, useReducer, useRef } from "react";
const init = [
    {
        id: 1,
        content: "Thứ 2 học HTML"
    },
    {
        id: 2,
        content: "Thứ 3 học CSS"
    },
    {
        id: 3,
        content: "Thứ 4 học JS"
    }
];
const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "CREATE":
            return [
                ...state,
                {
                    id: Date.now(),
                    content: action.value
                }
            ]
        default:
            return state;
    }
    return state;
}
function Todos() {
    const [todos, dispatch] = useReducer(reducer, init);
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.inputTodo.value;
        if (value) {
            dispatch({
                type: "CREATE",
                value: value
            });
        inputRef.current.value = "";
        


        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} name="inputTodo" />
                <button >Thêm Todo</button>
            </form>
            {todos.lenght > 0 && (
                <ul>
                    {todos.map(item => (
                        <li key={item.id}>
                            {item.content}
                        </li>
                    ))}
                </ul>
            )}
            Todos

        </>
    )
}
export default Todos;