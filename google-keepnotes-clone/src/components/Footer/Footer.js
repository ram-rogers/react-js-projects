import React from 'react'
import "./Footer.css"


function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer>
            <p>Copyright &copy; {year}</p>
        </footer>
    )
}

export default Footer