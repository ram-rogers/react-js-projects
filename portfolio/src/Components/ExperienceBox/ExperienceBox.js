import React from 'react'
import "./ExperienceBox.css"

export const ExperienceBox = ({ number, title }) => {
    return (
        <div className='experience'>
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
    )
}
