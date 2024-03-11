import logo from './logo.svg';
import './App.css';

import UpperNavbar from './Blog/Navbar/UpperNavbar'
import Routing from './Blog/Routing/Routing';
import LowerNavbar from './Blog/Navbar/LowerNavbar';
import { useSelector } from 'react-redux';

function App() {
 
  const store = useSelector((store)=>{
    return store?.flag
  })
  
  console.log(store)
  return (
    <div className="App">
      
      <UpperNavbar/>
      <div style={{height:'81vh'}}>
      <Routing/>
      </div>
    {
      store? <LowerNavbar/> : null
    }
     
    </div>
  );
}

export default App;
