import { Link } from "react-scroll"
import "./TopContent.css"

function TopContent() {
    return (
        <div className="topcontent">
            <div className="topcontent__container">
                <h1>Mr.Rahuram</h1>
                <p>A Professional Web Developer</p>
                <a href="https://www.github.com/ram-rogers" >
                    <button className="topcontent__download">Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topcontent__work">My Work</button>
                </Link>
            </div>

        </div>
    )
}

export default TopContent
