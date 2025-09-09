import { useDispatch, useSelector } from "react-redux"
import { down, reset, up } from "../../actions/counter"
function Counter () {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(up(5)) }>UP 5</button>
        <button onClick={() => dispatch(down(3) )}>DOWN 3</button>
        <button onClick={() => dispatch(reset() )}>RESET 0</button>
        </>
    )
}
export default Counter;