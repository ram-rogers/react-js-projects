import React from 'react'
import HighlightIcon from '@mui/icons-material/Highlight';
import "./Header.css"


function Header() {
    return (
        <header>
            <h1 className='header__title'>
                <div className='highlight__icon'><HighlightIcon /></div>
                <div>Keep</div>

            </h1>
        </header>
    )
}

export default Header