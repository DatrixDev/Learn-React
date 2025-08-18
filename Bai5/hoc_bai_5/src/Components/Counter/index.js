import { useState } from "react";
import { Box } from "../Box"

function Counter() {
    const [counter,setCounter] = useState(0);
    const handleCounter = () => {
        setCounter(counter => counter + 1)
    }
    return (
        <>
        <Box></Box>
        <div>Kết quả : {counter}</div>
        <button onClick={handleCounter}>Click </button>
        </>
    )
}

export default Counter;