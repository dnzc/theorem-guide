import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaFolderTree } from 'react-icons/fa6'
import Popup from '@/components/popup'
import Link from 'next/link'

export default function Sidebar({ children }) {

    // https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
    function useStateRef(initialValue) {
        const [value, setValue] = useState(initialValue)
        const ref = useRef(value)
        useEffect(() => {
            ref.current = value
        }, [value])
        return [value, setValue, ref]
    }

    const [active, setActiveState, activeRef] = useStateRef(true)

    function toggleSidebar() {
        setActiveState(!activeRef.current)
    }

    let [modifierKey, setModifierKey] = useState('')

    let [mobile, setMobile] = useState(false)
    function updateMobile() {
        setMobile(/iPhone|iPod|Android/i.test(navigator.userAgent))
    }

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

    useEffect(() => {
        let isMac = navigator.userAgent.toUpperCase().includes('MAC')
        setModifierKey(isMac ? '⌘' : 'Ctrl')

        updateMobile()
        window.addEventListener('resize', updateMobile)
        return () => {
            window.removeEventListener('resize', updateMobile)
        }
    }, [])

    return (
        <>
            {/* static space filler behind the sidebar (which is position fixed) */}
            {/* dvh to fix scrolling on ipad bug (top bar showing/hiding messes with viewport height) */} 
            <div className={`hidden ${active ? 'md:block ' : ''}w-[300px] shrink-0 min-h-[100dvh] float-left overflow-y-hidden border-r-2 border-elevated`}/>

            {/* space filler to center article on large screens */}
            <div className={`w-[10%] hidden ${active ? '' : '2xl:block '} shrink-0 min-h-[100dvh]`}/>

            {/* sidebar */}
            <nav className={`${active ? 'hidden md:block' : 'hidden'} fixed w-[300px] shrink-0 justify-center top-0 py-3`}>
                <span className='sidebar-title hover:text-primary'>
                    <Link href='/'> blog.danielc.rocks </Link>
                </span>
                <br/>
                <br/>
                {children}
                <button onClick={toggleSidebar} className='mt-4 flex text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-5 [@media(hover:hover)]:hover:bg-opacity-20 rounded-md px-3 py-1.5 ml-4'>
                    <span className='relative bottom-[1px]'>Toggle Filetree</span>
                    {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative'>{modifierKey} U</span>}
                </button>
                <br/>
                <br/>
            </nav>
            
            {/* top bar, for mobile devices */}
            <nav className={`md:w-0 md:h-0 fixed top-0 left-0 w-full h-[calc(2.25rem+2*1rem)] py-4 z-20`}>
                {/* blurred background */}
                <div className={`md:hidden fixed top-0 w-full h-[calc(2.25rem+2*1rem)] bg-black bg-opacity-30 backdrop-blur-md -z-10 md:w-0 md:h-0`}/>
                {/* filetree popup */}
                <Popup buttonStyle='flex h-[2.25rem] text-elevated items-center bg-body rounded-md md:hidden ml-4'
                    buttonContents={
                        <div className='bg-white bg-opacity-5 [@media(hover:hover)]:hover:bg-opacity-20 w-full h-full rounded-md pl-4 px-3 flex items-center justify-between space-x-2'>
                            <FaFolderTree/>
                            {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative hidden sm:inline'>{modifierKey} U</span>}
                        </div>
                    }
                    keyboardShortcutIndex={0}
                >
                    <div className='w-full h-full py-4'>
                        {children}
                    </div>
                </Popup>
                
                {/* button group */}
                <div className='flex 2xl:block justify-start space-x-4 2xl:space-x-0 2xl:space-y-2 fixed left-5 bottom-4'>
                    {/* sidebar toggle button */}
                    <button className={`hidden ${active ? '' : 'md:flex '} text-base text-elevated bg-body rounded-md h-[2.25rem]`} onClick={toggleSidebar}>
                        <div className='bg-white bg-opacity-5 [@media(hover:hover)]:hover:bg-opacity-20 w-full h-full rounded-md pl-4 px-3 flex items-center justify-between space-x-2'>
                            <FaFolderTree/>
                            {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative hidden sm:inline'>{modifierKey} U</span>}
                        </div>
                    </button>

                    {/* https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices */}
                    {/* search popup */}
                    <Popup buttonStyle='text-base text-elevated mr-4 bg-body'
                        buttonContents={
                            <>
                                <div className={`hidden xs:flex items-center w- fixed right-4 top-4 ${active ? 'md:w-[calc(300px-2rem)] md:left-[1rem] md:top-16' : 'md:hidden'} bg-black px-3 py-1.5 [@media(hover:hover)]:hover:ring-2 ring-bold rounded-md [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:bg-opacity-10`}>
                                    <FaSearch className='mr-3 h-full shrink-0'/>
                                    <span className='italic relative bottom-[0.5px]'>Search...</span>
                                    {mobile || modifierKey === '' ? <></> : <span className='ml-auto pl-3 text-sm font-bold hidden sm:block'>{modifierKey} K</span>}
                                </div>
                                <div className={`flex xs:hidden ${active ? '' : 'md:flex '}bg-body h-[2.25rem] rounded-md fixed md:static right-4 top-4`}>
                                    <div className='bg-white bg-opacity-5 [@media(hover:hover)]:hover:bg-opacity-20 w-full h-full rounded-md px-3 py-1.5 flex items-center justify-between space-x-2'>
                                        <FaSearch className='mr-0 h-full'/>
                                        {mobile || modifierKey === '' ? <></> : <span className='text-sm font-bold hidden sm:block'>{modifierKey} K</span>}
                                    </div>
                                </div>
                            </>
                        }
                        keyboardShortcutIndex={1}
                        listenWhenLarge={true}
                        isMobile={mobile}
                    /> {/* no children means render search component by default */}
                </div>

            </nav>
        </>
    )

}