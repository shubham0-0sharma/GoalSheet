import { FcFullTrash } from "react-icons/fc";

export const Note = ({id,text,date , deleteNote}) => {
    const handleDeleteClick = (id)=>{
        deleteNote(id)
    }
    return (
        <div
            className="bg-amber-300 rounded-xl p-1 min-h-[170px] flex flex-col
        justify-around whitespace-pre-wrap "
        >
            <span>{text}</span>
            <div className="flex justify-between">
                <small>{date}</small>
                <FcFullTrash
                    onClick={() => handleDeleteClick(id)}
                    size="1.3rem"
                    className="cursor-pointer	"
                />
            </div>
        </div>
    );
};
