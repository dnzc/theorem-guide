import { useState, useEffect, useRef } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import Search from './search'

const fullConfig = resolveConfig(tailwindConfig)

var shortcuts = ['u', 'k']

export default function Popup({ buttonStyle, buttonContents, keyboardShortcutIndex, listenWhenLarge, isMobile, children }) {

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
        document.body.style.height = '100%'
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'

        setActiveState(true)
    }

    function hidePopup() {
        // enable scrolling
        document.body.style.height = ''
        document.body.style.overflow = ''
        document.body.style.position = ''

        setActiveState(false)
    }

    function togglePopup() {
        if(activeRef.current) hidePopup()
        else showPopup()
    }

    function handleActiveClick(e) {
        if([...e.target.classList].includes('overlay')) hidePopup()
    }

    function handleKeydown(e) {
        if (lastEvent && lastEvent.keyCode == e.keyCode) return
        lastEvent = e

        let isMac = navigator.userAgent.toUpperCase().includes('MAC')

        if(e.key === 'Escape' && activeRef.current) {
            e.preventDefault()
            hidePopup()
        } else if((isMac ? e.metaKey : e.ctrlKey) && shortcuts.includes(e.key)) {
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
        document.addEventListener('keydown', handleKeydown)
        document.addEventListener('keyup', handleKeyup)
        return () => {
            document.removeEventListener('keydown', handleKeydown)
            document.removeEventListener('keyup', handleKeyup)
        }
    }, [active])

    useEffect(hidePopup, [])

    return (
        <>
            <button onClick={showPopup} className={buttonStyle}>
                {buttonContents}
            </button>
            <div onClick={handleActiveClick} className={`overlay flex md:items-center justify-center ${active ? '' : 'hidden '}fixed w-full h-full top-0 left-0 z-30 bg-black bg-opacity-30 backdrop-blur-md`}>
                <div className='max-w-[700px] w-full h-[80%] mt-4 md:mt-0 mx-4 z-40 bg-body rounded-xl relative'>
                    {/* https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices */}
                    <button onClick={hidePopup} className='absolute top-3 right-3 z-10 font-bold flex text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-10 [@media(hover:hover)]:hover:bg-opacity-20 rounded-md px-3 py-1.5 ml-4'>
                        ESC
                    </button>
                    {children ? children : <Search active={active} isMobile={isMobile}/>}
                </div>
            </div>
        </>
    )
}