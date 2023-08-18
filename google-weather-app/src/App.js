import React, { useState } from 'react'
import Card from './Components/Card';
import axios from 'axios';
import Temperature from './Components/Temperature';

export const App = () => {

	const [input, setInput] = useState("")
	const [temp, setTemp] = useState("")
	const [description, setDescription] = useState("")
	const [icon, setIcon] = useState("")


	async function findWeather() {
		const apiKey = "27b32fd692808b839b5061d336c9e720"
		const unit = 'metric'
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`
		const response = await axios.get(url)

		const temp = response.data.main.temp
		const weatherDesc = response.data.weather[0].description;
		const IconName = response.data.weather[0].icon
		const imgUrl = `https://openweathermap.org/img/wn/${IconName}@2x.png`
		console.log(temp, weatherDesc, icon, imgUrl, IconName)
		setTemp(temp)
		setDescription(weatherDesc)
		setIcon(imgUrl)
		setInput("")
	}




	return (
		<div>
			<>
				{
					temp === "" ?
						<Card input={input} setInput={setInput} findWeather={findWeather} />
						:
						<Temperature temp={temp} icon={icon} desc={description} setTemp={setTemp} />
				}
			</>
		</div>
	)
}

export default App;