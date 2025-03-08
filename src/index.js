import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  return (
    <header className="header">
      <h1>Delicious Pizzeria</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {numPizzas > 0 ? (
          pizzas.map((pizza, index) => (
            <li key={pizza.name}>
              <Pizza pizza={pizza} />
            </li>
          ))
        ) : (
          <p>No pizzas available</p>
        )}
      </ul>
    </main>
  );
}

// Footer component with open/closed status
function Footer() {
  const hour = new Date().getHours();
  const open = 9;
  const closed = 23;
  const isOpen = hour >= open && hour < closed;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open for orders!</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>We are closed for orders</p>
      )}
    </footer>
  );
}

// Pizza component
function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={` of ${pizza.name}`} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold out!" : `$${pizza.price}`}</span>
      </div>
    </div>
  );
}

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
