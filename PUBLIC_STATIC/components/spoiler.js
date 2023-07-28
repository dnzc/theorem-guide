import { useState } from "react"

export default function Spoiler({ children }) {
    const [visible, setVisible] = useState(false);

    function show() {
        setVisible(true);
    }

    return (
        <blockquote>
            <button onClick={show} className={`absolute text-link hover:text-hover${visible ? " hidden" : ""}`}>
                <p>&gt;Reveal spoiler...&lt;</p>
            </button>
            <span className={visible ? "" : "invisible"}>
                {children}
            </span>
        </blockquote>
    )
}