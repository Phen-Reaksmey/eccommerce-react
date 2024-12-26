import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Checkout from './page/Checkout';
import Navbar from './components/Navbar';
import Shop from './page/Shop';
import Footer from './page/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path='/shop' element={<Shop cart={cart} setCart={setCart}/> }  />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
