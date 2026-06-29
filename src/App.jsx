import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Offers from './pages/Offers';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="container" style={{ paddingTop: '100px' }}>
        <Header toggleCart={() => setCartOpen(!cartOpen)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;