import { useState } from "react"
import "./ProjectContainer.css"

function ProjectContainer({ img, title, desc, link }) {
    const [show, setShow] = useState(false)
    return (
        <div >
            <a href={link} target="_blank" rel="noreferrer">
                <div className="projectcontainer" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    {
                        show ? (
                            <div className="projectcontainer__content">
                                <h4>{title}</h4>
                                <p>{desc}</p>
                            </div>
                        ) : (
                            <div>
                                <img src={img} alt="" />
                            </div>
                        )
                    }
                </div>
            </a>
        </div>

    )
}

export default ProjectContainer
