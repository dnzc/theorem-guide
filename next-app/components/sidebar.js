'use client'

import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaFolderTree } from 'react-icons/fa6'
import Popup from '@/components/popup'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { FiCommand } from "react-icons/fi";
import { PiControlBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import ThemeSwitch from '@/components/themeSwitch'

export default function Sidebar({ children }) {

    const [active, setActive] = useState(true);

    const toggleSidebar = () => {
        setActive((prev) => !prev);
    };

    function handleKeydown(e) {
        if(e.repeat) return
        let isMac = navigator.userAgent.toUpperCase().includes('MAC')
        if((isMac ? e.metaKey : e.ctrlKey) && e.key==='u') {
            e.preventDefault()
            toggleSidebar()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => {
            document.removeEventListener('keydown', handleKeydown)
        }
    }, [active])

    let [modifierKey, setModifierKey] = useState('')

    let [mobile, setMobile] = useState(false)
    function updateMobile() {
        setMobile(/iPhone|iPod|Android/i.test(navigator.userAgent))
    }

    useEffect(() => {
        let isMac = navigator.userAgent.toUpperCase().includes('MAC')
        setModifierKey(isMac ?
            <span className='inline-flex align-middle relative bottom-[0.1rem] mr-[0.2rem]'><FiCommand size={14}/></span>
            : <span className='inline-flex align-middle relative bottom-[0.1rem] mr-[0.1rem]'><PiControlBold size={14}/></span>
        )

        updateMobile()
        window.addEventListener('resize', updateMobile)
        return () => {
            window.removeEventListener('resize', updateMobile)
        }
    }, [])

    let filetree = children
    let toc = []
    if(children.constructor === Array) {
        filetree = children[0]
        toc = children[1]
    }
    let filetreeDivStyle = filetree.props.className
    filetree = filetree.props.children // remove wrapper, add it back later with ref attached
    let tocDivStyle = null
    if(toc.constructor !== Array) { // toc exists
        tocDivStyle = toc.props.className
        toc = toc.props.children // remove wrapper to attach div later
    }
    const filetreeRef = useRef(null)
    const tocRef = useRef(null)
    const [isInsideFiletree, setIsInsideFiletree] = useState(false)
    const [isInsideToc, setIsInsideToc] = useState(false)
    const handleMouseEnterFiletree = () => {
        setIsInsideFiletree(true)
    }
    const handleMouseLeaveFiletree = () => {
        setIsInsideFiletree(false)
    }
    const handleMouseEnterToc = () => {
        setIsInsideToc(true)
    }
    const handleMouseLeaveToc = () => {
        setIsInsideToc(false)
    }
    const handleWheelEvent = (e) => {
        if (isInsideFiletree && filetreeRef.current) {
            filetreeRef.current.scrollTop += e.deltaY*0.3
            e.preventDefault()
        } else if (isInsideToc && tocRef.current) {
            tocRef.current.scrollTop += e.deltaY*0.3
            e.preventDefault()
        }
    }
    useEffect(() => {
        // Add wheel event listener once
        document.addEventListener('wheel', handleWheelEvent, { passive: false })
        
        // Add mouse event listeners
        const filetreeElement = filetreeRef.current
        const tocElement = tocRef.current
        
        if (filetreeElement) {
            filetreeElement.addEventListener('mouseenter', handleMouseEnterFiletree)
            filetreeElement.addEventListener('mouseleave', handleMouseLeaveFiletree)
        }
        if (tocElement) {
            tocElement.addEventListener('mouseenter', handleMouseEnterToc)
            tocElement.addEventListener('mouseleave', handleMouseLeaveToc)
        }
        
        return () => {
            document.removeEventListener('wheel', handleWheelEvent)
            if (filetreeElement) {
                filetreeElement.removeEventListener('mouseenter', handleMouseEnterFiletree)
                filetreeElement.removeEventListener('mouseleave', handleMouseLeaveFiletree)
            }
            if (tocElement) {
                tocElement.removeEventListener('mouseenter', handleMouseEnterToc)
                tocElement.removeEventListener('mouseleave', handleMouseLeaveToc)
            }
        }
    }, []) // Run once on mount

    return (
        <>
            {/* static space filler behind the sidebar (which is position fixed) */}
            {/* dvh to fix scrolling on ipad bug (top bar showing/hiding messes with viewport height) */} 
            <div className={`hidden ${active ? 'md:block ' : ''}w-[270px] shrink-0 min-h-[100dvh] float-left overflow-y-hidden border-r-2 border-border-subtle`}/>

            {/* space filler to center article on large screens */}
            <div className={`w-[10%] hidden ${active ? '' : '2xl:block '} shrink-0 min-h-[100dvh]`}/>

            {/* sidebar */}
            <nav className={`${active ? 'hidden md:block' : 'hidden'} fixed w-[270px] shrink-0 justify-center top-0 py-3`}>
                <div className='h-14'/>
                <div ref={filetreeRef} className={` ${filetreeDivStyle}`}>
                    {filetree}
                </div>
                <div ref={tocRef} className={tocDivStyle}>
                    {toc}
                </div>
                <button onClick={toggleSidebar} className='mt-4 flex text-text-secondary items-center space-x-6 pl-4 h-[2.25rem] bg-button hover:bg-button-hover rounded-md px-3 py-1.5 ml-4 transition-colors duration-150 ease-in-out'>
                    <span className='relative bottom-[1px]'>Toggle Sidebar</span>
                    {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative'>{modifierKey}U</span>}
                </button>
                <br/>
                <br/>
            </nav>
            
            {/* top bar, for mobile devices */}
            <nav className={`md:w-0 md:h-0 fixed top-0 left-0 w-full h-[calc(2.25rem+2*1rem)] py-4 z-20`}>
                {/* blurred background */}
                <div className={`md:hidden fixed top-0 w-full h-[calc(2.25rem+2*1rem)] bg-Mobiletopbar backdrop-blur-md -z-10 md:w-0 md:h-0`}/>
                {/* top button group */}
                <div className='flex'> {/* DON'T ADD SPACE-X-<> HERE, IT MESSES WITH THE OVERLAY POSITION */}
                    {/* filetree popup */}
                    <Popup buttonStyle='flex h-[2.25rem] text-text-secondary items-center bg-button hover:bg-button-hover rounded-md md:hidden ml-2 3xs:ml-4 transition-colors duration-150 ease-in-out'
                        buttonContents={
                            <div className='w-full h-full rounded-md pl-4 pr-3 flex items-center justify-between space-x-2'>
                                <FaFolderTree/>
                                <span className="relative bottom-[0.5px] hidden 2xs:block">Tree</span>
                                {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative hidden sm:inline'>{modifierKey}U</span>}
                            </div>
                        }
                        keyboardShortcutIndex={0}
                    >
                        <div className='w-full h-full py-4'>
                            {children}
                        </div>
                    </Popup>
                    {/* theme selector popup */}
                    <Popup buttonStyle='flex text-text-secondary ml-2 3xs:ml-4 min-w-0'
                        buttonContents={
                            /* mobile top bar or open sidebar */
                            /* TODO - make bigger on mobile */
                            <div className={`flex-none w-[2rem] h-[2.25rem] md:fixed md:w-[2rem] md:h-[2.25rem] ${active ? 'md:left-[calc(270px-2rem-1rem)]' : 'md:left-[calc(270px-3rem)] md:hidden'} bg-button rounded-md hover:bg-button-hover flex items-center justify-center transition-all duration-150 ease-in-out`}>
                                <IoIosSettings className='shrink-0' size={25}/>
                            </div>
                        }
                        listenWhenLarge={true}
                    >
                        <ThemeSwitch/>
                    </Popup>
                </div>
                
                {/* bottom button group */}
                <div className='flex 2xl:block justify-start fixed left-5 bottom-4'> {/* DON'T ADD SPACE-X-<> HERE, IT MESSES WITH THE OVERLAY POSITION */}
                    {/* sidebar toggle button */}
                    <button className={`hidden ${active ? '' : 'md:flex '} mr-4 2xl:mb-2 text-base text-text-secondary bg-button hover:bg-button-hover rounded-md h-[2.25rem] transition-colors duration-150 ease-in-out`} onClick={toggleSidebar}>
                        <div className='w-full h-full rounded-md pl-4 px-3 flex items-center justify-between space-x-2'>
                            <BsLayoutTextSidebarReverse/>
                            {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative hidden sm:inline'>{modifierKey}U</span>}
                        </div>
                    </button>

                    {/* search popup */}
                    <Popup buttonStyle='flex text-text-secondary'
                        buttonContents={
                            <>
                                {/* expanded (mobile top bar or open sidebar) */}
                                <div className={`hidden xs:flex items-center fixed right-4 h-[calc(2.25rem-2px)] top-[calc(1rem+1px)] ${active ? 'md:w-[calc(270px-2rem-3rem)] md:left-[1rem]' : 'md:hidden'} ring-2 ring-border-strong bg-Searchbar px-3 hover:ring-4 hover:ring-Searchbar-ring-hover rounded-md hover:bg-Searchbar-hover transition-all duration-150 ease-in-out`}>
                                    <FaSearch className='mr-3 h-full shrink-0'/>
                                    <span className='italic relative bottom-[0.5px] text-text-placeholder'>Search...</span>
                                    {mobile || modifierKey === '' ? <></> : <span className='ml-auto pl-3 text-sm font-bold hidden sm:block'>{modifierKey}K</span>}
                                </div>
                                {/* compact (when sidebar hidden, or, mobile top bar & screensize is xs or less) */}
                                <div className={`flex xs:hidden ${active ? '' : 'md:flex '} h-[2.25rem] rounded-md fixed right-2 3xs:right-4 top-4 md:static`}>
                                    <div className='bg-button hover:bg-button-hover w-full h-full rounded-md px-3 flex items-center justify-between space-x-2 transition-colors duration-150 ease-in-out'>
                                        <FaSearch className='mr-0 h-full'/>
                                        {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold hidden sm:block'>{modifierKey}K</span>}
                                    </div>
                                </div>
                            </>
                        }
                        listenWhenLarge={true}
                        keyboardShortcutIndex={1}
                    /> {/* no children means render search component by default */}

                </div>

            </nav>
        </>
    )

}