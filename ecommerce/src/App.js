import './App.css';
import {NavBar} from './Components/Navbar.jsx' 
import {ItemListContainer} from './Components/ItemListContainer.jsx'
import {ItemDetailContainer} from './Components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './Contexts/CartContext.jsx';
import { Cart } from './Components/Cart';



function App() {
  
  const lb=0;

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="MATIAS"/>}/>
        <Route path="/category/:id" element={<ItemListContainer greetings="MATIAS"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;