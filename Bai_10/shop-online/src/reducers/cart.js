const cartReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ]

        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => item.id === action.id);
            itemUpdate.quantity = itemUpdate.quantity + action.quantity;
            return newState;

        case "DELETE_ITEM":
            newState = newState.filter(item => item.id !== action.id)
            return newState;

            
        case "DELETE_ALL":
         
            return [];

        default:
            return state;
    }
}
export default cartReducer;