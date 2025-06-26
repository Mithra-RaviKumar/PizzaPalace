import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.name === item.name);
      if (existing) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
