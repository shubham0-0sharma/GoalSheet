import { useState } from "react";
const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState("");
    const charLimit = 250
    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0){

            setNoteText(event.target.value);
        }
    };
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText('')
        }
    };

    return (
        <div
            className="bg-slate-700 rounded-xl p-1 min-h-[170px] flex flex-col
        justify-around"
        >
            <textarea
                onChange={handleChange}
                value={noteText}
                cols="4"
                rows="8"
                placeholder="Type to add a Note here..."
                className="resize-none p-3 outline-0 bg-slate-700"
            ></textarea>
            <div className="flex justify-between items-center">
                <small>{charLimit - noteText.length} Remaining</small>
                <button
                    className="rounded-lg hover:rounded-full bg-gray-50 p-1.5 m-1 border-none"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
