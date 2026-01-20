'use client';
import { useState } from "react";

type MainHeaderProps = {
    nickname: string
    age: number
    weight: number
}

export default function MainHeader({ nickname, age, weight }: MainHeaderProps) {

    const today = new Date().toLocaleDateString('en-Au', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    const [headerInfo, setHeaderInfo] = useState<MainHeaderProps>({
        nickname,
        age,
        weight,
    });

    return (
    <header>
        <div className="main-header grid grid-cols-2 bg-white shadow-sm p-4 rounded-3xl">
            <div className="header-image border-3 flex items-center justify-center rounded-full w-50 h-50">Image</div>
            
            <div className="header-info min-w-50 min-h-50 flex items-center justify-start p-4">
                <ul>
                    <li className="font-bold">{today}</li>
                    <li>Nickname: {headerInfo.nickname}</li>
                    <li>Age: {headerInfo.age}</li>
                    <li>Weight: {headerInfo.weight}kg</li>
                </ul>
            </div>
        </div>
    </header>
    );
}