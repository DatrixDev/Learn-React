import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Menu from './Components/Menu';
import ProductList from './Components/ProductList';
import Country from './Components/Country.js';
import Lamp from './Components/Lamp/index.js';
import Cart from './Components/Cart/index.js';
import Modal from './Components/Modal/index.js';

function App() {
  return (
    <>
    <Menu/>
   <Login/>
   <ProductList/>
   <Country/>
   <Lamp/>
   <Cart/>
   <Modal/>
   </>
  );
}

export default App;
