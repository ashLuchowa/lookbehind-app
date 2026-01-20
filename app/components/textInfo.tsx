'use client'
import { useState } from "react";

type textInfo = {
    title: string
    textPara: string
}

export default function TextInfo() {
    const [infos, setInfos] = useState<textInfo[]>([
        {
            title: 'Goal',
            textPara: 'I would like to improve my yearly income to $100,000 before 2027',
        },{
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
            {infos.map((info, index)=> (
                <div key={index}>
                    <div className="flex flex-col gap-1 bg-white shadow-sm p-4 rounded-3xl">
                        <h2 className="font-bold">{info.title}</h2>
                        <p>{info.textPara}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}