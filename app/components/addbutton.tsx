'use client';
import AddForm from "./addform";

export default function AddButton() {
    const addForm = () => {
        console.log("Add button clicked");
    }

    return (
    <button onClick={() => addForm()} className="addbtn bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition cursor-pointer">
        Add
    </button>
    );
}