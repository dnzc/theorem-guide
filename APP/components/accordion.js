import Link from 'next/link'
import { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaBook, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { GrArticle } from "react-icons/gr";

export default function Accordion({title, href, type, relDepth, isSelected, isOpenByDefault, children}) {

    if(href==="") href = "/"

    const [active, setActiveState] = useState(isOpenByDefault)

    function toggleAccordion() {
        setActiveState(!active)
    }

    function handleClick(event) {
        event.preventDefault() // stop link from triggering
        toggleAccordion()
    }

    let padding = []
    for(let i=0; i<relDepth; ++i) padding.push(<div className='flex self-stretch pl-[9px] pr-0'><div className={`border-l-2 ${isSelected ? 'border-border-inverse' : 'border-border-subtle'}`}></div></div>)

    var icon
    if(type === 'folder' || type === 'course' && relDepth==0) {
        icon = ( type === 'folder' ? (
            <div className="flex self-stretch">
                <button className={`${isSelected ? '[@media(hover:hover)]:hover:bg-background-hover-hover' : '[@media(hover:hover)]:hover:bg-background-inverse-hover text-text-secondary'} flex items-center relative px-[2px]`} onClick={handleClick}>
                    {active ? <FaChevronDown size={16}/> : <FaChevronRight size={16}/>}
                </button>
                <div className={`flex items-center ml-[2px]${isSelected ? '' : ' text-folder-icon'}`}>
                    {active ? <AiFillFolderOpen size={20}/> : <AiFillFolder size={20}/>}
                </div>
            </div>
        ) : (
            <div className={isSelected ? '' : 'text-course-icon'}>
                <FaBook size={18}/>
            </div>
        ))
    } else if(type === 'course' && !relDepth==0) {
        icon = (
            <span className='pl-[22px] text-course-icon'><FaBook size={18}/></span> /* if selected course, then was dealth with above */
        )
    } else if(type === 'file') {
        icon = (
            <span className={`pl-[22px]${isSelected ? '' : ' text-text-secondary'}`}><GrArticle size={20}/></span>
        )
    }

    return (
        <li>
            <Link href={href}>
                <div className={`w-full flex items-center pl-2 ${isSelected ? 'text-text-inverse bg-background-inverse' : 'text-text-primary [@media(hover:hover)]:hover:bg-background-hover '}`}>
                    {padding}
                    {icon}
                    <span className='ml-1'>{title}</span>
                </div>
            </Link>
            <ul className={`${active ? '' : 'max-h-0'} overflow-hidden`}>
                {children}
            </ul>
        </li>
    )
}