
import React from 'react';
import './Home.css';
import pizzaLogo from '../assets/logo-pizza.png';
import scooter from '../assets/scooter2.png'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="landing-container container-fluid p-0" >
        <header className="header d-flex justify-content-between align-items-center">
                <div className="logo-section d-flex align-items-center gap-3">
                  <img src={pizzaLogo} alt="Pizza Logo" />
                  <div className="logo-text">
                    Pizza<br />Palace
                  </div>
                </div>
                <nav className="nav-menu d-flex align-items-center gap-4">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                  <a href="/menu">Menu</a>
                  <Link to="/lo" className="login-btn">Login</Link>
                  <a href="/cart" className="cart-icon"><FaShoppingCart /></a>
                </nav>
              </header>
      
      
      <section className="main-content text-center d-flex flex-column justify-content-center align-items-center">
        <h1>Welcome!</h1>
        <p> Your favorite pizzas delivered hot and fresh!🍕</p>
      </section>
       
      <div className="scooter-wrapper">
  <img src={scooter} alt="Scooter" className="scooter" />
</div>
    </div>
  );
}
