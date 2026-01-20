'use client';
import { useState } from "react";
import AddForm from "./addform";

export default function AddButton() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm((prev) => !prev);
    }

    return (
    <div>
        <button onClick={handleClick} className="addbtn bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition cursor-pointer">
            Add
        </button>
        
        {showForm && <AddForm />}
    </div>
    
    );
}