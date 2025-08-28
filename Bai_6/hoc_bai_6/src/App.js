import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterReducer from './Components/CounterReducer';
import CounterState from "./Components/CounterState"
import ProductState from './Components/ProductState';
import Todos from './Components/Todos';

function App() {
  return (
    <>
    <Counter/>
    <CounterState/>
    <CounterReducer/>
    <ProductState/>
    <Todos/>
    </>
   
  );
}

export default App;
