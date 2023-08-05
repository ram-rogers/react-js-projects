import './index.css'
import './data.js'

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


export default function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	)
}


function Header() {
	return (
		<header className='header'>
			<h1>Fast React Pizza Co.</h1>
		</header>
	)
}

function Menu() {
	const pizzas = pizzaData;
	// const pizzas = []
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{
				numPizzas > 0 ? (
					<ul className='pizzas'>
						{
							pizzas.map(pizza => (
								<Pizza pizzaObj={pizza} key={pizza.name} />
							))
						}
					</ul>
				) : (<p>We're Still working on our menu. Please come back later :)</p>)
			}

		</main>
	)
}

function Pizza({ pizzaObj }) {

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt="" />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
			</div>
		</li>
	)
}


function Footer() {
	const hour = new Date().getHours()
	// const hour = 8
	const openhour = 12
	const closeHour = 22
	const isOpen = hour >= openhour && hour <= closeHour
	console.log(isOpen)

	return (
		<div>

			<footer className='footer'>
				{
					isOpen ? (
						<div className='order'>
							<p>
								We're open until {closeHour}:00. Come visit us or order Online.
							</p>
							<button className='btn'>Order</button>
						</div>
					) : (<p>We're happy to welcome you between {openhour}:00 and {closeHour}:00 :) </p>)
				}
			</footer>
		</div>
	)
}