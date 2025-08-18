import './App.css';
import Counter from './Components/Counter';
import Layout from './Components/Layout';
import RandomGift from './Components/RandomGift';
import UseRef from './Components/UseRef';
import UseRef2 from './Components/UseRef2';
import UseRef4 from './Components/UseRef4';

function App() {
  return (
   <>
   <Layout></Layout>
   <UseRef/>    
   <UseRef2/>   
   <RandomGift/>  
   <UseRef4/> 
   <Counter/>
   </>
  );
}

export default App;
