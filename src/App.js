import logo from './logo.svg';
// import './App.css';
 import{ Route, Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ShopContextProvider from './context/ShopContextProvider';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Shop></Shop>} ></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>

     </BrowserRouter>
     </ShopContextProvider>
    </div>
  );
}

export default App;
