import { useState } from "react";
import "./App.css"

export default function App() {
	return <div className="App">
		<Counter />
	</div>;
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1)

	const date = new Date("may 23 2023")
	date.setDate(date.getDate() + count)

	const handleReset = () => {
		setCount(0)
		setStep(1)
	}

	return (
		<div className="container">

			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))} />

				<span>Step: {step}</span>
			</div>

			<div>
				<button className="btn-sm" onClick={() => setCount((s) => s - step)}>-</button>
				<input className="form-control" type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
				<button className="btn-sm" onClick={() => setCount((s) => s + step)}>+</button>
			</div>

			<div>
				<p>
					<span>{count === 0
						? "Today is "
						: count > 0
							? `${count} days from today is `
							: `${Math.abs(count)} days ago was `}
					</span>
					<span>
						{date.toDateString()}
					</span>
				</p>

				{count !== 0 || step !== 1 ? <div className="btn-div">
					<button className="btn" onClick={handleReset}>Reset</button>
				</div> : null}

			</div>


		</div>
	)
}