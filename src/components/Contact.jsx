import React from 'react';
import './Contact.css';
import contactBg from '../assets/aboutbg.jpg';
import pizzaLogo from '../assets/logo-pizza.png';

function Contact() {
  return (
    <div className="contact-container" style={{ backgroundImage: `url(${contactBg})` }}>
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

      <div className="contact-overlay">
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