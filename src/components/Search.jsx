import { FcSearch } from "react-icons/fc";
export const Search = () => {
    return (
        <div className="bg-gray-300 flex items-center rounded-md p-2 my-2">
            <FcSearch  size="1.6rem" />
            <input   className="bg-gray-300 px-4 outline-none" type="text" placeholder="Search" />
        </div>
    );
};
