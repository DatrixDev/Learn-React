export const up = (number) => {
    return {
        type:"UP",
        number : number
    };
}

export const down = (number) => {
    return {
        type:"DOWN",
        number : number

    };
}

export const reset = () => {
    return {
        type:"RESET"
    };
}