import React from 'react';
import './Contact.css';
import contactBg from '../assets/aboutbg.jpg';
import pizzaLogo from '../assets/logo-pizza.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-container container-fluid p-0" style={{ backgroundImage: `url(${contactBg})` }}>
      <header className="header  d-flex justify-content-between align-items-center">
        <div className="logo-section d-flex align-items-center gap-">
          <img src={pizzaLogo} alt="Pizza Logo" />
          <div className="logo-text">
            Pizza<br />Palace
          </div>
        </div>
        <nav className="nav-menu  d-flex align-items-center gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/menu">Menu</a>
          <Link to="/lo" className="login-btn">Login</Link>
          <a href="/cart" className="cart-icon"><FaShoppingCart /></a>
        </nav>
      </header>

      <div className="contact-overlay d-flex justify-content-end align-items-center">
        <div className="contact-content">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-text">
            📍 Address: 123 Pizza Lane, Mozzarella City, 600045<br />
            📞 Phone: +91 98765 43210<br />
            📧 Email: hello@pizzapalace.com<br /><br />
            ⏰ Working Hours:<br />
            Mon-Sun: 11:00 AM – 11:00 PM<br /><br />
            💬 Got any questions or feedback? Don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;