import { memo } from "react";

function Box (props) {
    const  {onCounter, onReset} = props;
    console.log(onCounter) 
    console.log("render box")
    const handleClick =() =>{

        onCounter();
    }

    const handleReset =() =>{
        onReset();

    }
    return (
        <>
              <button onClick={handleClick}>Click </button>
              <button onClick={handleReset}>Reset </button>

        </>
    )
}
export default memo(Box);