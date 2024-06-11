import { useState, useEffect, useRef } from 'react'
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "@/tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig)

var shortcuts = ['l', 'k']

export default function Popup({ buttonStyle, buttonContents, keyboardShortcutIndex, listenWhenLarge, children }) {

    var lastEvent

    // https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
    function useStateRef(initialValue) {
        const [value, setValue] = useState(initialValue)
        const ref = useRef(value)
        useEffect(() => {
          ref.current = value
        }, [value])
        return [value, setValue, ref]
    }

    const [active, setActiveState, activeRef] = useStateRef(false)

    function showPopup() {
        // disable scrolling
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden"
        setActiveState(true)
    }

    function hidePopup() {
        // enable scrolling
        document.body.style.height = ""
        document.body.style.overflow = ""
        setActiveState(false)
    }

    function togglePopup() {
        if(activeRef.current) hidePopup()
        else showPopup()
    }

    function handleActiveClick(e) {
        if([...e.target.classList].includes("overlay")) hidePopup()
    }

    function handleKeydown(e) {
        if (lastEvent && lastEvent.keyCode == e.keyCode) return
        lastEvent = e

        if(e.key === "Escape") {
            hidePopup()
        } else if(e.ctrlKey && shortcuts.includes(e.key)) {
            if(!listenWhenLarge && window.innerWidth >= parseInt(fullConfig.theme.screens.md)) return
            e.preventDefault()
            if(e.key === shortcuts[keyboardShortcutIndex]) togglePopup()
            else hidePopup()
        }
    }

    function handleKeyup() {
        lastEvent = null
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => {handleKeydown(e)})
        document.addEventListener('keyup', handleKeyup)
        window.addEventListener('resize', hidePopup)
    }, [])

    let visibility = active ? "" : "hidden "

    return (
        <>
            <button onClick={showPopup} className={buttonStyle}>
                {buttonContents}
            </button>
            <div onClick={handleActiveClick} className={`overlay flex items-center justify-center ${visibility}fixed w-full h-full top-0 left-0 bg-black bg-opacity-30 backdrop-blur-md z-30`}>
                <div className="max-w-[700px] w-full h-[70%] mx-10 z-40 bg-body rounded-xl p-4">
                    <button onClick={hidePopup} className="absolute top-4 right-4 font-bold flex text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md px-3 py-1.5 ml-4">
                        ESC
                    </button>
                    {children}
                </div>
            </div>
        </>
    )
}