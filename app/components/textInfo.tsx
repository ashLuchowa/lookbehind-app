'use client'
import { useState } from "react";

type textInfo = {
    id: number
    title: string
    textPara: string
}

let idCounter = 1;

export default function TextInfo() {
    const [infos, setInfos] = useState<textInfo[]>([
        {
            id: idCounter++,
            title: 'Goal',
            textPara: 'I would like to improve my yearly income to $100,000 before 2027',
        },{
            id: idCounter++,
            title: 'Tomorrow',
            textPara: 'Buy carrots for piko',
        },
    ]);

    // const addInfo = (title: string, textPara: string) => {
    //     // Add form and button from a separate component
    //     setInfos(prev => [
    //         ...prev,
    //         { title, textPara }
    //     ]);
    // };

    return (
        <div className="text-info grid grid-cols-1 gap-4">
            {infos.map((info)=> (
                <div key={info.id}>
                    <div className="flex flex-col gap-1 bg-white shadow-sm p-4 rounded-3xl">
                        <h2 className="font-bold">{info.title}</h2>
                        <p>{info.textPara}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}