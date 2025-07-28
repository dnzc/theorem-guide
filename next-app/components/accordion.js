'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaBook, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { GrArticle } from "react-icons/gr";

export default function Accordion({title, href, type, relDepth, isSelected, isOpenByDefault, children}) {

    if(href==="") href = "/"

    // Create a unique key for this accordion based on its path
    const storageKey = `accordion-state-${href}`

    // Initialize state from localStorage or default
    const [active, setActiveState] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey)
            if (saved !== null) {
                return saved === 'true'
            }
        }
        return isOpenByDefault
    })

    // Save state to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined' && active !== undefined) {
            localStorage.setItem(storageKey, active.toString())
        }
    }, [active, storageKey])

    function toggleAccordion() {
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
    if(type === 'folder' || type === 'course' && relDepth==0) {
        icon = (
            <div className='flex self-stretch'>
                <button className={`${isSelected ? 'hover:bg-Filetree-chevron-current-hover text-Filetree-chevron-current' : 'hover:bg-Filetree-chevron-hover text-Filetree-chevron'} flex items-center px-[2px] mr-[2px] cursor-crosshair`} onClick={handleClick}>
                    <div className='relative right-[2px] flex self-stretch'>
                        {padding}
                    </div>
                {active ? <FaChevronDown size={16}/> : <FaChevronRight size={16}/>}
                </button>
                {type === 'folder' ? (
                    <div className={`flex items-center ml-[2px]${isSelected ? '' : ' text-folder-icon'}`}>
                        {active ? <AiFillFolderOpen size={20}/> : <AiFillFolder size={20}/>}
                    </div>
                ) : (
                    <div className={`flex items-center ml-[2px]${isSelected ? '' : ' text-course-icon'}`}>
                        <FaBook size={18}/>
                    </div>
                )}
            </div>
        )
    } else if(type === 'course' && !relDepth==0) {
        icon = (
            <span className='pl-[22px] text-course-icon mr-[3px]'><FaBook size={18}/></span> /* if selected course, then was dealth with above */
        )
    } else if(type === 'file') {
        icon = (
            <span className={`mr-[4px] pl-[22px]${isSelected ? '' : ' text-article-icon'}`}><GrArticle size={20}/></span>
        )
    }

    return (
        <li>
            <Link href={href}>
                <div className={`w-full flex items-center text-base ${isSelected ? 'text-Filetree-text-current bg-Filetree-current' : 'text-text-primary hover:bg-Filetree-hover'}`}>
                    {type !== 'folder' && padding}
                    {icon}
                    <span className='ml-1 py-[3px]'>{title}</span>
                </div>
            </Link>
            <ul className={`${active ? '' : 'max-h-0'} overflow-hidden`}>
                {children}
            </ul>
        </li>
    )
}