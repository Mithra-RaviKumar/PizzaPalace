import {React, useEffect } from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';


export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h2 className="cart-heading">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
            <>
          <p className="empty-cart">Your cart is empty.</p>
          <Link to="/menu" className="back-to-menu-btn">Back to Menu</Link>

          </>
        ) : (
            
          <>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li className="cart-item" key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                  
                </li>
              ))}
            </ul>

            <p className="total-price">Total: ₹{totalPrice}</p>
            <button className="order-btn">Place Order</button>
            <Link to="/menu" className="back-to-menu-btn">Back to Menu</Link>
          </>
        )}
      </div>
    </div>
  );
}
