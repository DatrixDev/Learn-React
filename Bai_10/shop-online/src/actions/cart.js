export const addToCart = (id ,info) => {
    return {
        type : "ADD_TO_CART",
        id : id,
        info : info

    }
}

export const updateQuantity  = (id ,quantity = 1) => {
    return {
        type : "UPDATE_QUANTITY",
        id : id,
        quantity : quantity

    }
}

export const deleteItem  = (id ) => {
    return {
        type : "DELETE_ITEM",
        id : id
    }
}

export const deleteAll  = () => {
    return {
        type : "DELETE_ALL",
     }
}







