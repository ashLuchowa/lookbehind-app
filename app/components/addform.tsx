'use client';

import { useState } from "react";

export default function AddForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Replace console.log with actual submission logic
        console.log(`Title: ${title}`);
        console.log(`Description: ${description}`);
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="add-form flex flex-col gap-1 bg-white shadow-sm p-4 rounded-3xl">
            <input 
                type="text" 
                placeholder="title"
                className="border"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Description"
                className="border"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 cursor-pointer">Submit</button>
        </form>
    )
}