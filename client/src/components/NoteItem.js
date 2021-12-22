import React , {useContext} from 'react';
import notecontext from "../context/notes/noteContext";
import "../css/Note.css"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});


const NoteItem = (props) => {



  
  const context = useContext(notecontext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <>
    <div className="notes">
      <div className="eachnote card my-3 rounded-pill"data-aos="fade-up">
        <div className="card-body mx-4">
          <div className="d-flex align-item-center">
          <h5 className="card-title">{note.title}</h5>
          <i className=" fas fa-trash mx-2" id='delete' onClick={()=>{deleteNote(note._id)}}></i>
          <i className=" fas fa-pencil-alt mx-2" id='edit' onClick={()=>{updateNote(note)}}></i>
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
