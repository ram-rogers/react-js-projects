import { Button, Input } from "@material-ui/core";
import "./Card.css"



function Card({ input, setInput, findWeather }) {


    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleClick(e) {
        if (input === "") {
            alert("Enter a city name")
            return;
        }
        e.preventDefault()
        findWeather()
    }

    return (
        <div className="card_container">
            <div className="card_items">
                <h1>Weather App</h1>
                <p>Powered by </p>
                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png" alt="logo" />

                <form>
                    <Input placeholder="Enter the city name" onChange={handleChange} value={input} /><br />
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Search</Button>

                </form>
            </div>

        </div>
    )
}

export default Card
