import { Button } from "@material-ui/core"
import "./Temperature.css"

function Temperature({ temp, desc, icon, setTemp }) {
    return (
        <div className="tempcard">
            <div className="temp__box">
                <h1>Temperature: {temp}°C</h1>
                <p>{desc}</p>
                <img src={icon} alt="logo" /><br />
                <Button variant="contained" onClick={() => setTemp("")}>Back</Button>
            </div>
        </div>
    )
}

export default Temperature
