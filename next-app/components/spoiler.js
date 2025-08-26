'use client'

import { useState } from 'react'
import { PiWarningCircleBold } from "react-icons/pi";

export default function Spoiler({ children }) {
    const [visible, setVisible] = useState(false);

    function show() {
        setVisible(true);
    }

    return (
        <blockquote>
            <div className="absolute">
                <button onClick={show} className={`relative top-2 p-1 text-Spoiler-accent hover:bg-button border-2 border-Spoiler-accent rounded-lg flex items-center space-x-0.5 transition-all duration-150 ease-in-out hover:scale-105${visible ? ' hidden' : ''}`}>
                    <span className="text-sm font-bold">Reveal spoiler</span> <span className="text-xl"><PiWarningCircleBold/></span>
                </button>
            </div>
            <span className={visible ? '' : 'hidden'}>
                {children}
            </span>
            <span className={visible ? 'hidden' : 'invisible'}>
                ;<br/>;
            </span>
        </blockquote>
    )
}