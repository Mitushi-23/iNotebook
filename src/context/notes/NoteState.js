import NoteContext from './noteContext';
import {useState} from 'react'
const NoteState = (props)=> {
    const notesInitial=[
        {
          "_id": "61b2474f7900867a402c4017",
          "user": "61b0a7d2a483c8ec5412771c",
          "title": "My Title",
          "description": "This is my note",
          "tag": "hello",
          "date": "2021-12-09T18:13:35.255Z",
          "__v": 0
        },
        {
          "_id": "61b249551f9575c82de3cc0c",
          "user": "61b0a7d2a483c8ec5412771c",
          "title": "Daily Task",
          "description": "Wake up Early",
          "tag": "Personal",
          "date": "2021-12-09T18:22:13.683Z",
          "__v": 0
        },
        {
          "_id": "61b249781f9575c82de3cc0e",
          "user": "61b0a7d2a483c8ec5412771c",
          "title": "Blog",
          "description": "Make a new Blog",
          "tag": "Youtube",
          "date": "2021-12-09T18:22:48.189Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial);
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
