import React from 'react';
import './Home.css';
import pizzaLogo from '../assets/logo-pizza.png';
import scooter from '../assets/scooter2.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="landing-container" >
        <header className="header">
                <div className="logo-section">
                  <img src={pizzaLogo} alt="Pizza Logo" />
                  <div className="logo-text">
                    Pizza<br />Palace
                  </div>
                </div>
                <nav className="nav-menu">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                  <a href="/menu">Menu</a>
                  <button className="login-btn">Login</button>
                </nav>
              </header>
      
      
      <section className="main-content">
        <h1>Welcome!</h1>
        <p>Your favorite pizzas are just a click away 🍕</p>
      </section>
       
      <div className="scooter-wrapper">
  <img src={scooter} alt="Scooter" className="scooter" />
</div>
    </div>
  );
}
