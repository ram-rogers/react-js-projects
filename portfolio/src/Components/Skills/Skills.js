import "./Skills.css"
import { Element } from 'react-scroll'
import skills from "../../assets/skills.jpg"
import { LinearProgress } from "@mui/material"

function Skills() {
    return (
        <Element className="skillcontainer" name="skills">
            <div className="skillcontainer__image">
                <img src={skills} alt="" />
            </div>
            <div className="skillcontainer__text">
                <h2>Skills</h2>

                <div className="skillcontainer__skillset">
                    <h5>React</h5>
                    <div className="skillcontainer__slider skillcontainer__slider1">
                        <LinearProgress variant="determinate" value={60} />
                    </div>
                </div>

                <div className="skillcontainer__skillset">
                    <h5>PHP</h5>
                    <div className="skillcontainer__slider skillcontainer__slider2">
                        <LinearProgress variant="determinate" value={75} />
                    </div>
                </div>

                <div className="skillcontainer__skillset">
                    <h5>Java</h5>
                    <div className="skillcontainer__slider skillcontainer__slider3">
                        <LinearProgress variant="determinate" value={65} />
                    </div>
                </div>

                <div className="skillcontainer__skillset">
                    <h5>Python</h5>
                    <div className="skillcontainer__slider skillcontainer__slider4">
                        <LinearProgress variant="determinate" value={55} />
                    </div>
                </div>

                <div className="skillcontainer__skillset">
                    <h5>JavaScript</h5>
                    <div className="skillcontainer__slider skillcontainer__slider5">
                        <LinearProgress variant="determinate" value={65} />
                    </div>
                </div>

            </div>
        </Element>
    )
}

export default Skills
