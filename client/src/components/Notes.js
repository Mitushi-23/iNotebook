import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import notecontext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

function Notes(props) {
  const {showAlert} =props
  const context = useContext(notecontext);
  const { notes, getNotes, editNote} = context;
  const [note, setnote] = useState({id:"", etitle: "", edescription: "", etag: "" });

  const handleClick = (e) => {
      console.log("Updating the note...",note)
      editNote(note.id, note.etitle, note.edescription, note.etag)
    setnote({ etitle: "", edescription: "", etag: "" });
      refClose.current.click();
  }; 

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else
    {
      history.push('/login')
    }
  },[]);
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id: currentNote._id ,etitle: currentNote.title, edescription:currentNote.description , etag:currentNote.tag})
  };
  const ref = useRef(null);
  const refClose = useRef(null);
  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
              minLength={3} required

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
              minLength={8} required

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
              minLength={3} required

                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length<3 || note.edescription.length<8}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <h2 className="text-center">Your Notes</h2>
        <p className="text-center my-2">{notes.length === 0 && 'No notes to display'}</p>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={showAlert} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
