import { Element } from "react-scroll"
import "./ExperienceContainer.css"
import { ExperienceBox } from "../ExperienceBox/ExperienceBox"

function ExperienceContainer() {
    return (
        <div>
            <Element className="experiencecontainer" id="exp">
                <h2>Experience</h2>
                <div className="experiencecontainer__info">
                    <ExperienceBox number="10+" title="clients" />
                    <ExperienceBox number="60+" title="Projects" />
                    <ExperienceBox number="5+" title="Years of Experience" />
                    <ExperienceBox number="600+" title="Students got trained" />


                </div>
            </Element>
        </div>
    )
}

export default ExperienceContainer
