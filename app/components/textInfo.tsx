'use client'

type textInfo = {
    title: string
    textPara: string
}

export default function TextInfo({ title, textPara }: textInfo) {
    const addInfo = (title, textPara):textInfo => {
        // Placeholder function to demonstrate functionality
    }

    return (
        <div className="text-info grid grid-cols-1 gap-4 bg-white shadow-sm p-4 rounded-3xl">
            <h2 className="font-bold">{title}</h2>
            <p>{textPara}</p>
            <button onClick={() => addInfo(title, textPara)}>Click</button>
        </div>
    )
}