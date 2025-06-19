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
                <button onClick={show} className={`relative top-2 p-1 text-Spoiler-accent border-2 border-Spoiler-accent rounded-lg flex items-center space-x-0.5${visible ? ' hidden' : ''}`}>
                    <span className="text-sm">Reveal spoiler</span> <span className="text-xl"><PiWarningCircleBold/></span>
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