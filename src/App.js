import React from "react";
import pizzaData from './data';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu /> 
      <Footer />
    </div>
  );
}

function Header() {
return (
  <header className="header">
<h1> Fast React Pizza Company</h1>
  </header>
);
}

function Menu() {
  const pizzas =pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {numPizzas > 0 ? (
        <>
           <p>
        Authentic Italian cuisine. 6 creative dishes  to choose from.
         All from our stone oven, all organic, all delicious.
      </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later. </p>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {

  // if(pizzaObj.soldOut) return null;
  console.log(pizzaObj)

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      {pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}$</span>
        )
      }
     </div> 
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

return (
<footer className="footer">
 {isOpen ? (
 <Order closeHour={closeHour} openHour={openHour} />
 ) : (
  <p>We're happy to welcome you between {openHour} and {closeHour}:00.
 </p>
 )} 
  </footer>
);
}

function Order({closeHour, openHour}){
  return (
   <div className="order">
    <p>We're open from {openHour}:00 to {closeHour}. Come visit us or order online.
    </p>
<button className="btn">Order</button>
   </div> 
  )
}
export default App;
