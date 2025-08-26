'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaBook, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { GrArticle } from 'react-icons/gr';

export default function Accordion({title, href, type, relDepth, isSelected, isOpenByDefault, children}) {

    if(href==="") href = "/"

    // create a unique key for this accordion based on its path
    const storageKey = `accordion-state-${href}`

    const [active, setActiveState] = useState(isOpenByDefault)
    const [isHydrated, setIsHydrated] = useState(false)
    const [userTriggered, setUserTriggered] = useState(false)
    const [height, setHeight] = useState('auto')
    const contentRef = useRef(null)

    // sync with stored state before paint to prevent flash
    useLayoutEffect(() => {
        const saved = sessionStorage.getItem(storageKey)
        
        if (saved !== null) {
            const savedState = saved === 'true'
            
            // if we're on a page inside this accordion path but the accordion is collapsed,
            // this suggests direct navigation; use default state instead
            if (!savedState && (isSelected || window.location.pathname.startsWith(href))) {
                sessionStorage.removeItem(storageKey)
            } else {
                setActiveState(savedState)
            }
        }
        
        setIsHydrated(true)
    }, [storageKey, isSelected, href, isOpenByDefault])

    // save state to sessionStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined' && isHydrated && active !== undefined) {
            sessionStorage.setItem(storageKey, active.toString())
        }
    }, [active, storageKey, isHydrated])

    function toggleAccordion() {
        if (!userTriggered) setUserTriggered(true)
        
        if (contentRef.current) {
            if (active) {
                // Collapsing: set current height then animate to 0
                setHeight(`${contentRef.current.scrollHeight}px`)
                setTimeout(() => setHeight('0px'), 10)
            } else {
                // Expanding: animate to calculated height
                setHeight(`${contentRef.current.scrollHeight}px`)
                setTimeout(() => setHeight('auto'), 300)
            }
        }
        
        setActiveState(!active)
    }

    function handleClick(event) {
        event.preventDefault() // stop link from triggering
        toggleAccordion()
    }

    let padding = [ <div className='flex self-stretch pl-[9px] pr-0' key={0}/> ]
    padding = []
    for(let i=0; i<relDepth; ++i) padding.push(<div className='flex self-stretch pl-[9px] pr-0' key={i+1}><div className={`border-l-2 ${isSelected ? 'border-Filetree-pipe-current' : 'border-Filetree-pipe'}`}></div></div>)

    var icon
    if(type === 'folder' || type === 'book' && relDepth==0) {
        icon = (
            <div className='flex self-stretch'>
                <button className={`${isSelected ? 'hover:bg-Filetree-chevron-current-hover text-Filetree-chevron-current' : 'hover:bg-Filetree-chevron-hover text-Filetree-chevron'} flex items-center px-[2px] mr-[2px] cursor-crosshair transition-colors duration-150 ease-in-out`} onClick={handleClick}>
                    <div className='relative right-[2px] flex self-stretch'>
                        {padding}
                    </div>
                {active ? <FaChevronDown size={16}/> : <FaChevronRight size={16}/>}
                </button>
                {type === 'folder' ? (
                    <div className={`flex items-center mr-[4px]${isSelected ? '' : ' text-folder-icon'}`}>
                        {active ? <AiFillFolderOpen size={20}/> : <AiFillFolder size={20}/>}
                    </div>
                ) : (
                    <div className={`flex items-center ml-[1px] mr-[5px]${isSelected ? '' : ' text-book-icon'}`}>
                        <FaBook size={18}/>
                    </div>
                )}
            </div>
        )
    } else if(type === 'book' && !relDepth==0) {
        icon = (
            <span className='pl-[22px] text-book-icon ml-[1px] mr-[5px]'><FaBook size={18}/></span> /* if selected book, then was dealt with above */
        )
    } else if(type === 'file') {
        icon = (
            <span className={`mr-[4px] pl-[22px]${isSelected ? '' : ' text-article-icon'}`}><GrArticle size={20}/></span>
        )
    }

    return (
        <li>
            <Link href={href}>
                <div className={`w-full flex items-center text-base transition-colors duration-150 ease-in-out ${isSelected ? 'text-Filetree-text-current bg-Filetree-current' : 'text-text-primary hover:bg-Filetree-hover'}`}>
                    {type !== 'folder' && padding}
                    {icon}
                    <span className='py-[3px]'>{title}</span>
                </div>
            </Link>
            <ul 
                ref={contentRef}
                className={`overflow-hidden ${userTriggered ? 'transition-all duration-300 ease-in-out' : ''}`}
                style={{ height: userTriggered ? height : (active ? 'auto' : '0px') }}
            >
                {children}
            </ul>
        </li>
    )
}