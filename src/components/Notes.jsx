import '../css/todo.css'
import { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export function Notes(props) {
    const { notes, removeNote } = props;

    const [textarea_input, setTextarea_Input] = useState("")

    const handleChange = (e) => {
        setTextarea_Input(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: textarea_input
        })
        
        setTextarea_Input('')
    }


    console.log(textarea_input)

    return (
        <>
        <div className="notes">
            <div className="notes-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={textarea_input}
                        placeholder="Add a note" 
                        className='notes_field'
                        onChange={handleChange}
                    ></textarea>
                    <button className="btn-notes" onClick={handleSubmit}>Add</button>
                </form>
            </div>
            <div className="notes-display">
                    {notes.map((note) => (
                        <div className='note-item'>
                            <div className='note-text' key={note.id}>
                                {note.text}
                            </div>
                            <div className='icons'>
                                <RiCloseCircleLine 
                                    onClick={() => removeNote(note.id)}
                                    className='delete-icon'/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        </>
    )
}