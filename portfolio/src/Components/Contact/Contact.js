import { Element } from "react-scroll"
import "./Contact.css"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Contact() {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email : <span>ram23rogers@gmail.com</span>
                </p>
                <p>Github : <a href="https://github.com/ram-rogers" target="__blank"><span>@ram-rogers</span></a></p>
                <div className="contact__icons">
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/rahuram-mb" target="__blank">
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="icons" >
                        <a href="https://www.instagram.com/_ram___rogers/" target="__blank">
                            <FaInstagram />
                        </a>
                    </div>

                    <div className="icons" >
                        <a href="https://www.facebook.com" target="__blank">
                            <FaFacebook />
                        </a>
                    </div>


                </div>
            </div>
        </Element>
    )
}

export default Contact
