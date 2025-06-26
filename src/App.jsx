import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import LoginOptions from './components/LoginOptions';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; 

export default function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path= "/lo" element={<LoginOptions />} />
      <Route path="/alo" element={<AdminLogin />} />
      <Route path="/clo " element={<CustomerLogin />} />
      <Route path="/cart" element={<Cart/>} />

    </Routes>
    </CartProvider>
  );
}
