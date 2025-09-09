const init = [
    {
        id: 1,
        content: "Công việc 1 ",
        completed: true
    },
    {
        id: 2,
        content: "Công việc 2 ",
        completed: true
    },
    {
        id: 3,
        content: "Công việc 3 ",
        completed: true
    }
]
const todoReducer = (state = init, action) => {
    let newState = [...state];
    console.log(state, action);
    switch (action.type) {
        case "CREATE_TODO":
            newState = [
                ...newState,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ]
            return newState;


        case "COMPLETE_TODO":
            const indexComplete = newState.findIndex(item => {
                return item.id === action.id;
            })
            newState[indexComplete].completed = true;
            return newState;

        case "UNDO_TODO":
            const indexUndo = newState.findIndex(item => {
                return item.id === action.id;
            })
            newState[indexUndo].completed = false;
            return newState;


        case "DELETE_TODO":
            newState = newState.filter(item => {
                return item.id !== action.id
            })
            return newState;



        default:
            return state;
    }

}
export default todoReducer;