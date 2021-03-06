import React, { useContext, useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import notecontext from "../context/notes/noteContext";
import { useHistory } from 'react-router-dom';
import "../css/Note.css"

const AddNote = () => {



  const context = useContext(notecontext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  let history = useHistory();
  const location = useLocation();
  useEffect(() => {
   console.log(location.pathname);
  }, [location]);
  const handleLogout=()=>{
    localStorage.removeItem('token');
    history.push('/');
  }
  const handleClick = (e) => {
      e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <i class="fas fa-sign-out-alt" 
        id="log"
         data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="LogOut" onClick={handleLogout}></i>
      <h2>Add Notes</h2>
      <form className="my-3">
       
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
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
              id="description"
              name="description"
              value={note.description}
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
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          <button
          disabled={note.title.length<3 || note.description.length<8}
            type="submit"
            onClick={handleClick}
            className="btn add"
          >Add Note
          </button>
    

        </form>
      
    </div>
  );
};

export default AddNote;
