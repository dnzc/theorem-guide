import { useState, useEffect } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import { FaSearch } from 'react-icons/fa'
import { FaFolderTree } from "react-icons/fa6"
import Popup from '@/components/popup'
import Link from 'next/link'

const fullConfig = resolveConfig(tailwindConfig)

var lastEvent

export default function Sidebar({ children }) {

    const [active, setActiveState] = useState(true)

    function toggleSidebar() {
        setActiveState(!active)
    }

    function handleKeydown(e) {
        if (lastEvent && lastEvent.keyCode == e.keyCode) return
        lastEvent = e
        if(window.innerWidth < parseInt(fullConfig.theme.screens.md)) return

        if(e.ctrlKey && e.key === "l") {
            e.preventDefault()
            toggleSidebar()
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

    let visibility = active ? "hidden md:block" : "hidden"
    
    return (
        <>
            <div className={`${visibility} md:w-[300px] md:shrink-0 md:h-100% md:min-h-screen`}/>
            <nav className={`${visibility} fixed md:w-[300px] md:shrink-0 md:justify-center md:h-100% md:min-h-screen md:border-r-2 md:border-elevated py-3`}>
                <span className="sidebar-title">
                    <Link href="/"> wiki.danielc.rocks </Link>
                </span>
                {children}
                <button onClick={toggleSidebar} className="fixed bottom-8 left-2 flex text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5 ml-4">
                    <span>Hide Filetree</span>
                    <span className="text-sm font-bold relative">Ctrl L</span>
                </button>

            </nav>

            <nav className={`md:w-0 md:h-0 fixed top-0 left-0 w-full h-[calc(2.25rem+2*1rem)] py-4 z-20`}>
                <div className={`md:hidden fixed top-0 w-full h-[calc(2.25rem+2*1rem)] bg-black bg-opacity-30 backdrop-blur-md -z-10 md:w-0 md:h-0`}/>
                <div className={`${active ? 'hidden' : 'visible'} bg-body ml-4 rounded-md`}>
                    <button onClick={toggleSidebar} className="hidden md:flex fixed right-[4.5rem] h-[2.25rem] text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5">
                        <FaFolderTree/>
                    </button>
                </div>
                <div className={`md:hidden bg-body ml-4 rounded-md absolute left-0`}>
                    <Popup buttonStyle="flex md:hidden h-[2.25rem] text-elevated items-center space-x-2 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5"
                        buttonContents={
                            <>
                                <FaFolderTree/>
                                <span className="text-sm font-bold relative hidden sm:inline">Ctrl L</span>
                            </>
                        }
                        keyboardShortcutIndex={0}
                        listenWhenLarge={false}
                    >
                        {children}
                    </Popup>
                </div>
                <Popup buttonStyle="text-base text-elevated mr-4 flex bg-body space-x-4"
                    buttonContents={
                        <>
                            <div className={`flex items-center w-[50vw] fixed right-[1rem] ${active ? 'md:w-[calc(300px-2rem)] md:left-[1rem] md:top-16' : 'md:hidden'} bg-black px-3 py-1.5 hover:ring-2 ring-bold rounded-md hover:bg-white hover:bg-opacity-10`}>
                                <FaSearch className="mr-3 h-full shrink-0"/>
                                <span className="italic">Search...</span>
                                <span className="ml-auto pl-3 text-sm font-bold hidden sm:block">Ctrl K</span>
                            </div>
                            <div className={`${active ? 'hidden' : 'hidden md:flex'} bg-white fixed right-4 bg-opacity-5 hover:bg-opacity-20 h-[2.25rem] rounded-md px-3 py-1.5`}>
                                <FaSearch className="mr-0 h-full"/>
                            </div>
                        </>
                    }
                    keyboardShortcutIndex={1}
                    listenWhenLarge={true}
                >
                    <p className="italic text-italic">Coming soon...</p>
                </Popup>
            </nav>
        </>
    )

}