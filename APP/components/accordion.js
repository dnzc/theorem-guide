import Link from 'next/link'
import { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'

export default function Accordion({title, href, type, isRoot, isSelected, isOpenByDefault, children}) {

    if(href==="") href = "/"

    const [active, setActiveState] = useState(isOpenByDefault)

    function toggleAccordion() {
        setActiveState(!active)
    }

    let titleWrapper = (
        <Link href={href} className='[@media(hover:hover)]:hover:underline'>
            {title}
        </Link>
    )
    let titleElement = ""
    if(type === 'folder' || type === 'course' && isRoot ) {
        titleElement = (
            <div className={`font-bold flex items-center space-x-1 ${isSelected ? 'text-secondary' : 'text-primary'}`}>
                {type === 'folder' ? (
                    <button className='cursor-crosshair [@media(hover:hover)]:hover:text-secondary' onClick={toggleAccordion}>
                        {active ? <AiFillFolderOpen size={20}/> : <AiFillFolder size={20}/>}
                    </button>
                ) : (
                    <FaBook size={18}/>
                )}
                {titleWrapper}
            </div>
        )
    } else if(type === 'course' && !isRoot) {
        titleElement = (
            <div className={`flex items-center space-x-1 ${isSelected ? 'text-secondary' : ''}`}>
                <span className='text-elevated'><FaBook/></span>
                {titleWrapper}
            </div>
        )
    } else if(type === 'file') {
        titleElement = (
            <p className={isSelected ? 'text-secondary' : ''}>{titleWrapper}</p>
        )
    }

    return (
        <li>
            {titleElement}
            <ul className={`${active ? '' : 'max-h-0'} overflow-hidden`}>
                {children}
            </ul>
        </li>
    )
}