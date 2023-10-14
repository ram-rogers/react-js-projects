import React, { useState } from "react";
import "./CreateNote.css";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateNote({ addNote }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const expand = () => {
        setIsExpanded(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const submitNote = (e) => {
        e.preventDefault();

        addNote(note);
        setNote({
            title: "",
            content: "",
        });
        setIsExpanded(false);
    };

    return (
        <div className="createnotes">
            <form className="create__note">
                {isExpanded && (
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                        value={note.title}
                    />
                )}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    onClick={expand}
                    onChange={handleChange}
                    rows={isExpanded ? 3 : 1}></textarea>

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateNote;
