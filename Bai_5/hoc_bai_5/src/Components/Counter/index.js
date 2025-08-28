import { useCallback, useState } from "react";
import { Box } from "../Box"

function Counter() {
    const [counter,setCounter] = useState(0);
    // const handleCounter = () => {
    //     setCounter(counter => counter + 1)
    // }

    const handleCounter = useCallback( () => {
        setCounter(counter => counter + 1);
    },[])
    const handleReset = useCallback( () => {
        setCounter(0);
    },[])
    return (
        <>
        <div>Kết quả : {counter}</div>
        <Box onCounter={handleCounter} onReset={handleReset}> </Box>

        </>
    )
}

export default Counter;