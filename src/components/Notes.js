import React , {useContext} from 'react'
import notecontext from "../context/notes/noteContext"
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(notecontext)
    const {notes,setNotes}=context;
    return (
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
            return <NoteItem note={note}/>;
        })}
      </div>
    )
}

export default Notes
