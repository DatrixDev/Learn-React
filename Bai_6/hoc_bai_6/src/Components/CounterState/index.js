import { useState } from "react";
import Counter from "../Counter"

function CounterState (){
    const [counter, setCounter] = useState(0);
    return (
        <>
        <div>Kết quả: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Up</button>
        <button onClick={() => setCounter(counter - 1)}>Down</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}
export default CounterState;