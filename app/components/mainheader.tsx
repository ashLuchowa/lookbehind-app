'use client';
import { useState } from "react";

type MainHeaderProps = {
    date: string
    nickname: string
    age: number
    weight: number
}

export default function MainHeader({ date, nickname, age, weight }: MainHeaderProps) {

    const [headerInfo, setHeaderInfo] = useState({
        date,
        nickname,
        age,
        weight,
    });

    return (
    <header>
        <div className="main-header grid grid-cols-2 gap-10 bg-gray-300 p-4 my-4 rounded-3xl">
            <div className="header-image border-3 flex items-center justify-center rounded-full min-w-50 min-h-50">Image</div>
            
            <div className="header-info border min-w-50 min-h-50 flex items-center justify-start p-4">
                <ul>
                    <li className="font-bold">{headerInfo.date}</li>
                    <li>Nickname: {headerInfo.nickname}</li>
                    <li>Age: {headerInfo.age}</li>
                    <li>Weight: {headerInfo.weight}kg</li>
                </ul>
            </div>
        </div>
    </header>
    );
}