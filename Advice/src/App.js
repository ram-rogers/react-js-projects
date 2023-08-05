import { useState } from "react";
import './App.css'

function App() {

	const [advice, setAdvice] = useState("Did u need Some Advice?");
	const [butn, setButn] = useState("Click me")


	async function getAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice")
		const data = await res.json();
		setAdvice(data.slip.advice)
		setButn("Want some more Advice??")

	}



	return (
		<div className="main">
			<div className="container">
				<div>{advice}</div>
				<button className="btn" onClick={getAdvice}>{butn}</button>
			</div>
		</div>
	);
}

export default App;
