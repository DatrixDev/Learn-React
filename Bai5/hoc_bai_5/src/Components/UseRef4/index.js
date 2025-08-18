import { useEffect, useRef, useState } from "react";

function UseRef4 () {
    const [inputValue, setInbutValue] = useState ("");
    const [counter, setCounter] = useState(0);
    const counterRef  = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleOnchange = (e)  => {
        setInbutValue(e.target.value);
        counterRef.current = counterRef.current + 1;
        console.log(inputRef);
    }
    return (
        <>
        <input ref={inputRef} value={inputValue} onChange={handleOnchange}></input>
        </>
    ) 
}
export default UseRef4 ;