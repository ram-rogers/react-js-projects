import React from 'react'
import "./Notes.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Notes({ title, content, deleteNote, id }) {

    function handleClick() {
        deleteNote(id)
    }


    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Notes