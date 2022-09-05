import './App.css';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import Detail from './pages/Detail';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product/:id' element={<Detail />} />
            <Route exact path='/products' element={<ItemList />} />
            <Route exact path='/products/:category' element={<ItemList />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
