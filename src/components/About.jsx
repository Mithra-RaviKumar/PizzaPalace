import React from 'react';
import './About.css';
import aboutBg from '../assets/aboutbg.jpg';
import pizzaLogo from '../assets/logo-pizza.png'; 
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-container container-fluid p-0" style={{ backgroundImage: `url(${aboutBg})` }}>
     
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

      
      <div className="about-overlay d-flex justify-content-end align-items-center">
        <div className="about-content">
          <h1 className="about-heading">About Us</h1>
          <p className="about-text">
            <font color="orange"><center>More than just pizza — it’s a lifestyle!</center></font>
            Welcome to <strong>Pizza Palace</strong>, where every slice tells a story! Since our humble beginning in <strong>1985</strong>, we've been crafting the perfect blend of flavor, freshness, and fun. Our passion for pizza goes beyond ingredients — it's about bringing people together with every bite.<br /><br />

            🥗 Fresh Ingredients – Handpicked veggies, rich cheese, and signature sauces made in-house.<br />
            🌍 Widespread Reach– From busy cities to cozy towns, we’re never far from your cravings.<br />
            📲 One-Click Ordering – A user-friendly online system to place your order in seconds.<br />
            🗓️ Pre-Order Made Easy – Plan your pizza night in advance with our flexible options.<br />
            🎉 Perfect for Parties – Hosting a birthday, office event, or celebration? We've got you covered!<br /><br />

            At <strong>Pizza Palace</strong>, you’re not just a customer — you’re part of our pizza-loving family. Your love fuels our ovens and inspires us to serve better, faster, and tastier every day.<br /><br />

            Crafted with heart, melted with cheese — that’s the Pizza Palace promise.
          </p>
        </div>
      </div>
    </div>
  );
}