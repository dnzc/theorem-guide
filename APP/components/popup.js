import { useState, useEffect, useRef } from 'react'
import Search from '@/components/search'
import { Children, cloneElement, isValidElement } from 'react'

var shortcuts = ['u', 'k']

export default function Popup({ buttonStyle, buttonContents, listenWhenLarge, isMobile, children, keyboardShortcutIndex }) {

    let isSearch = children ? false : true

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
        if(e.repeat) return

        let isMac = navigator.userAgent.toUpperCase().includes('MAC')

        if(e.key === 'Escape' && activeRef.current) {
            e.preventDefault()
            e.target.blur() // remove focus on esc key pressed (else button gets outline)
            hidePopup()
        } else if((isMac ? e.metaKey : e.ctrlKey) && shortcuts.includes(e.key)) {
            if(!listenWhenLarge && window.innerWidth >= 768) return // screens.md in tailwind config
            e.preventDefault()
            if((keyboardShortcutIndex===0 || keyboardShortcutIndex===1) && e.key === shortcuts[keyboardShortcutIndex]) togglePopup()
            else hidePopup()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        window.addEventListener('resize', hidePopup)
        return () => {
            document.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('resize', hidePopup)
        }
    }, [active])

    useEffect(hidePopup, [])


    // make toc links hide the mobile popup when clicked
    function adjustTocLinks(children) {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
        // if the child has children, recurse
        if (child.props.children) {
            child = cloneElement(child, {
            children: adjustTocLinks(child.props.children),
            });
        }

        // check if this is a target
        if (child.props.className?.includes("tocentry")) {
            return cloneElement(child, { onClick: hidePopup });
        }

        return child;
        }
        return child;
    });
    }

    if(!isSearch) {
        children = adjustTocLinks(children)
    }

    return (
        <>
            <button onClick={showPopup} className={buttonStyle}>
                {buttonContents}
            </button>
            <div onClick={handleActiveClick} className={`overlay flex md:items-center justify-center ${active ? '' : 'hidden '}fixed w-full h-full top-0 left-0 z-30 bg-Popup-overlay backdrop-blur-md`}>
                <div className='max-w-[700px] w-full h-[80%] mt-4 md:mt-0 mx-4 z-40 bg-background rounded-xl relative'>
                    {/* https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices */}
                    <button onClick={hidePopup} className='absolute top-3 right-3 z-10 font-bold flex text-text-secondary items-center space-x-6 pl-4 bg-button [@media(hover:hover)]:hover:bg-button-hover rounded-md px-3 py-1.5 ml-4'>
                        ESC
                    </button>
                    {isSearch ? <Search active={active} hidePopupFunction={hidePopup}/> : children}
                </div>
            </div>
        </>
    )
}
