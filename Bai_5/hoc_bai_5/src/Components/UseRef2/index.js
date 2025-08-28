import { useRef, useState } from "react";

function UseRef2 () {
    const [inputValue, setInbutValue] = useState ("");
    const [counter, setCounter] = useState(0);
    const counterRef  = useRef(0)
    const handleOnchange = (e)  => {
        setInbutValue(e.target.value);
        setCounter(counter + 1)
        counterRef.current = counterRef.current + 1;
    }
    console.log(counterRef.current);
    console.log(inputValue);
    return (
        <>
        <input value={inputValue} onChange={handleOnchange}></input>
        </>
    ) 
}
export default UseRef2 ;