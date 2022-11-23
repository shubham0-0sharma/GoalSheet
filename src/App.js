import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";

function App() {
    const [notes, setNotes] = useState([
    ]);
    const addNote = (text) => {
        console.log(text)
        const date = new Date();

        const newNote = {
            date: date.toLocaleDateString(),
            id: nanoid(),
            text: text
        };
        const newNotes = [...notes , newNote]
        setNotes(newNotes)
    };

    const deleteNote = (noteid) =>{
        const newNotes = notes.filter((note) => note.id != noteid)
        setNotes(newNotes)
        
    }

    return (
        <div className="max-w-4xl mr-auto ml-auto pr-1 pl-1 ">
            <Search/>
            <NoteList notes={notes} addNote={addNote} deleteNote = {deleteNote}/>
        </div>
    );
}

export default App;
