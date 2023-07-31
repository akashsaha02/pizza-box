import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>);
}


function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {};
  return <header className='header'>
    <h1 style={style}>Fast React Pizza Co.</h1>
  </header>
}


function Menu() {
  const pizzas = pizzaData;
  // const pizzas=[];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className='pizzas'>
            {pizzaData.map(pizza => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
          </ul>

        </>
      )
        : <p>We're still working on that, please come later :)</p>}
    </main>
  );
}


function Pizza({ pizzaObj }) {

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}


function Footer() {

  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  // isOpen ? alert("We're currently open.") : alert("Sorry, We are closed.");

  return (
    <footer className='footer'>
      {isOpen ? <Order closeHours={closeHour} /> : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00. </p>}
    </footer >
  );
  // return React.createElement('footer', null, "We're currently helping");
}


function Order({ closeHours }) {
  return (
    <div className="order">
      <p>We're open until {closeHours}:00, come visit us or order online.</p>
      <button className='btn'>Order Now</button>
    </div>
  );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
