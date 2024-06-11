import Link from 'next/link'
import { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'

export default function Accordion({title, href, isFolder, isSelected, isOpenByDefault, children}) {

    const [active, setActiveState] = useState(isOpenByDefault)
    const [height, setHeightState] = useState(isOpenByDefault ? "": "max-h-0")

    function toggleAccordion() {
        setActiveState(!active)
        setHeightState(active ? "max-h-0" : "")
    }

    let titleWrapper = (<Link href={href}>{title}</Link>)
    let titleElement = isFolder ? (
        <div className="flex items-center space-x-1">
            <button className={`cursor-crosshair ${isSelected ? "text-secondary" : "text-primary"} hover:text-secondary`} onClick={toggleAccordion}>
                {active ? <AiFillFolderOpen size={18}/> : <AiFillFolder size={18}/>}
            </button>
            <span className={isSelected ? "text-secondary" : "text-primary"}>{titleWrapper}</span>
        </div>
    ) : (<p className={isSelected ? "text-secondary" : ""}>{titleWrapper}</p>)

    return (
        <li className={isFolder ? "" : "file"}>
            {titleElement}
            <ul className={`${height} overflow-hidden`}>
                {children}
            </ul>
        </li>
    )
}