import React, { useState } from 'react';
import './Menu.css';
import pizzaLogo from '../assets/logo-pizza.png';
import { FaShoppingCart } from 'react-icons/fa';

// Pizza Images
import pizza1 from '../assets/pizza/pizza1.jpg';
import pizza2 from '../assets/pizza/pizza2.jpg';
import pizza3 from '../assets/pizza/pizza3.jpg';
import pizza4 from '../assets/pizza/pizza4.jpg';
import pizza5 from '../assets/pizza/pizza5.jpg';
import pizza6 from '../assets/pizza/pizza6.jpg';
import pizza7 from '../assets/pizza/pizza7.jpg';
import pizza8 from '../assets/pizza/pizza8.jpg';
import pizza9 from '../assets/pizza/pizza9.jpg';
import pizza10 from '../assets/pizza/pizza10.jpg';

// Burger Images
import burger1 from '../assets/burgers/burger1.jpg';
import burger2 from '../assets/burgers/burger2.jpg';
import burger3 from '../assets/burgers/burger3.jpg';
import burger4 from '../assets/burgers/burger4.jpg';
import burger5 from '../assets/burgers/burger5.jpg';
import burger6 from '../assets/burgers/burger6.jpg';
import burger7 from '../assets/burgers/burger7.jpg';
import burger8 from '../assets/burgers/burger8.jpg';
import burger9 from '../assets/burgers/burger9.jpg';
import burger10 from '../assets/burgers/burger10.jpg';

//Beverages
import beverage1 from '../assets/beverages/beverage1.jpg';
import beverage2 from '../assets/beverages/beverage2.jpg';
import beverage3 from '../assets/beverages/beverage3.jpg';
import beverage4 from '../assets/beverages/beverage4.jpg';
import beverage5 from '../assets/beverages/beverage5.jpg';
import beverage6 from '../assets/beverages/beverage6.jpg';
import beverage7 from '../assets/beverages/beverage7.jpg';
import beverage8 from '../assets/beverages/beverage8.jpg';
import beverage9 from '../assets/beverages/beverage9.jpg';
import beverage10 from '../assets/beverages/beverage10.jpg';
 
//desserts
import dessert1 from '../assets/desserts/dessert1.jpg';
import dessert2 from '../assets/desserts/dessert2.jpg';
import dessert3 from '../assets/desserts/dessert3.jpg';
import dessert4 from '../assets/desserts/dessert4.jpg';
import dessert5 from '../assets/desserts/dessert5.jpg';
import dessert6 from '../assets/desserts/dessert6.jpg';
import dessert7 from '../assets/desserts/dessert7.jpg';
import dessert8 from '../assets/desserts/dessert8.jpg';
import dessert9 from '../assets/desserts/dessert9.jpg';
import dessert10 from '../assets/desserts/dessert10.jpg';

//pastas
import pasta1 from '../assets/pasta/pasta1.jpg';
import pasta2 from '../assets/pasta/pasta2.jpg';
import pasta3 from '../assets/pasta/pasta3.jpg';
import pasta4 from '../assets/pasta/pasta4.jpg';
import pasta5 from '../assets/pasta/pasta5.jpg';
import pasta6 from '../assets/pasta/pasta6.jpg';
import pasta7 from '../assets/pasta/pasta7.jpg';
import pasta8 from '../assets/pasta/pasta8.jpg';
import pasta9 from '../assets/pasta/pasta9.jpg';
import pasta10 from '../assets/pasta/pasta10.jpg';

const categories = ['Pizza', 'Burgers', 'Beverages', 'Desserts', 'Pasta'];

const pizzaItems = [
  { name: "Margherita", price: "150", image: pizza1 },
  { name: "Farmhouse", price: "180", image: pizza2 },
  { name: "Pepperoni", price: "200", image: pizza3 },
  { name: "Green Wave", price: "170", image: pizza4 },
  { name: "Deluxe Veggie", price: "190", image: pizza5 },
  { name: "Veggie Paradise", price: "160", image: pizza6 },
  { name: "Cheese Burst", price: "210", image: pizza7 },
  { name: "Paneer Tikka", price: "220", image: pizza8 },
  { name: "Italian Veg", price: "180", image: pizza9 },
  { name: "BBQ Chicken", price: "230", image: pizza10 },
];

const burgerItems = [
  { name: "Veggie Delight", price: "120", image: burger1 },
  { name: "Cheese Burger", price: "150", image: burger2 },
  { name: "Spicy Paneer Burger", price: "170", image: burger3 },
  { name: "BBQ Classic Chicken Burger", price: "190", image: burger4 },
  { name: "Double Patty", price: "200", image: burger5 },
  { name: "Aloo Tikki Burger", price: "100", image: burger6 },
  { name: "Mushroom Melt", price: "180", image: burger7 },
  { name: "Egg Burger", price: "160", image: burger8 },
  { name: "Cheesy Crunch", price: "170", image: burger9 },
  { name: "Loaded Beef Burger", price: "220", image: burger10 },
];
const beverageItems = [
  { name: "Coca Cola", price: "50", image: beverage1 },
  { name: "Iced Coffee", price: "70", image: beverage2 },
  { name: "Lemon Soda", price: "40", image: beverage3 },
  { name: "Orange Juice", price: "60", image: beverage4 },
  { name: "Mango Smoothie", price: "80", image: beverage5 },
  { name: "Milkshake", price: "90", image: beverage6 },
  { name: "Green Tea", price: "60", image: beverage7 },
  { name: "Cold Brew", price: "85", image: beverage8 },
  { name: "Water Bottle", price: "20", image: beverage9 },
  { name: "Virgin Mojito", price: "95", image: beverage10 },
];
const dessertItems = [
  {
     name: 'choco lava cake',
    image: dessert1,
    price: '119',
  },
  {
    name: 'vanilla ice cream',
    image: dessert2,
    price: '69',
  },
  {
    name: 'brownie sundae',
    image: dessert3,
    price: '149',
  },
  {
    name: 'Strawberry Cheesecake',
    image: dessert4,
    price: '159',
  },
  {
    name: 'tiramisu cup',
    image: dessert5,
    price: '89',
  },
  {
    name: 'fruit custard',
    image: dessert6,
    price: '99',
  },
  {
    name: 'chocolate mousse',
    image: dessert7,
    price: '139',
  },
  {
    name: 'gulab jamun',
    image: dessert8,
    price: '169',
  },
  {
    name: 'apple pie slice',
    image: dessert9,
    price: '119',
  },
  {
    name: 'caramel pudding',
    image: dessert10,
    price: '79',
  }
];
const pastaItems = [
  {
    name: 'Creamy Alfredo Pasta',
    image: pasta1,
    price: '189',
  },
  {
    name: 'Spaghetti Bolognese',
    image: pasta2,
    price: '199',
  },
  {
    name: 'Penne Arrabiata',
    image: pasta3,
    price: '179',
  },
  {
    name: 'Cheesy Macaroni',
    image: pasta4,
    price: '169',
  },
  {
    name: 'Tomato Basil Penne',
    image: pasta5,
    price: '159',
  },
  {
    name: 'Garlic Butter Pasta',
    image: pasta6,
    price: '149',
  },
  {
    name: 'Spinach Alfredo Fusilli',
    image: pasta7,
    price: '189',
  },
  {
    name: 'Pasta Primavera',
    image: pasta8,
    price: '179',
  },
  {
    name: 'Mushroom Cream Pasta',
    image: pasta9,
    price: '199',
  },
  {
    name: 'Tandoori Pasta',
    image: pasta10,
    price: '189',
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Pizza');

  const getItems = () => {
  if (selectedCategory === 'Pizza') return pizzaItems;
  if (selectedCategory === 'Burgers') return burgerItems;
  if (selectedCategory === 'Beverages') return beverageItems;
  if (selectedCategory === 'Desserts') return dessertItems;
  if (selectedCategory === 'Pasta') return pastaItems;
  return [];
};

  return (
    <div className="menu-page">
      {/* Header */}
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

      <div className="menu-container">
        <div className="menu-sidebar">
          {categories.map(cat => (
            <div
              key={cat}
              className={`menu-category ${cat === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="menu-items">
          <h2>{selectedCategory}</h2>
          <div className="item-grid">
            {getItems().map((item, index) => (
              <div className="item-card" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹ {item.price}</p>
                <button className="cart-btn"><FaShoppingCart /></button>
              </div>
            ))}
            {getItems().length === 0 && <p style={{ color: '#fff' }}>Coming Soon!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
