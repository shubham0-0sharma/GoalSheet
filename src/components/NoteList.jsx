import AddNote from "./AddNote";
import { Note  } from "./Note";

export const NoteList = ({ notes, addNote, deleteNote }) => {
    let noteEle = notes.map((note) => (
        <Note
            id={note.id}
            text={note.text}
            date={note.date}
            deleteNote={deleteNote}
        />
    ));
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {noteEle}
            <AddNote addNote={addNote}  />
        </div>
    );
};
