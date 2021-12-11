import React , {useContext} from 'react';
import notecontext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(notecontext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <>
    <div className="col-md-10">
      <div className="card my-3 rounded-pill">
        <div className="card-body mx-4">
          <div className="d-flex align-item-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fas fa-pencil-alt mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">
          {note.description}
          </p>
        </div>
      </div>
      </div>
      </>
  );
};

export default NoteItem;
