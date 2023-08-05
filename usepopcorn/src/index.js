import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import App from './App';
import "./index.css"

// const Test = () => {
// 	const [movieRating, setMovieRating] = useState(0)

// 	return (
// 		<div>
// 			<StarRating color='orangered' maxRating={10} onSetRating={setMovieRating} />
// 			<p>This movie is rated as {movieRating}</p>
// 		</div>
// 	)
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
		<StarRating maxRating={5} color='red' defaultRating={2} />
		<StarRating maxRating={5} color='green' size={24} className="test" /> */}


	</React.StrictMode>
);

