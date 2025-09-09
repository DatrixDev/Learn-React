const counterReducer = (state = 0, action) => {
    console.log(state, action);
    switch (action.type) {
        case "UP":
            return state + action.number;
        case "DOWN":
             return state - action.number;
        case "RESET":
            return state = 0; 
        default :
            return state;
    }
}
export default counterReducer;