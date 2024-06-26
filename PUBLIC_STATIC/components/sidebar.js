import { useState, useEffect, useRef } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import { FaSearch } from 'react-icons/fa'
import { FaFolderTree } from 'react-icons/fa6'
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

        if(e.ctrlKey && e.key === 'l') {
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

    let visibility = active ? 'hidden md:block' : 'hidden'

    //https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    const [isMobile, setIsMobile] = useState(false) // for whether the keyboard shortcuts hints are visible
    let [modifierKey, setModifierKey] = useState('')
    useEffect(() => {
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) setIsMobile(true)})(navigator.userAgent||navigator.vendor||window.opera)
        let isMac = navigator.userAgent.toUpperCase().includes('MAC')
        setModifierKey(isMac ? '⌘' : 'Ctrl')
    }, [])

    return (
        <>
            <div className={`${visibility} md:w-[300px] md:shrink-0 md:h-100% md:min-h-screen`}/>
            <nav className={`${visibility} fixed md:w-[300px] md:shrink-0 md:justify-center md:h-100% md:min-h-screen md:border-r-2 md:border-elevated py-3`}>
                <span className='sidebar-title'>
                    <Link href='/'> wiki.danielc.rocks </Link>
                </span>
                {children}
                <button onClick={toggleSidebar} className='fixed bottom-8 left-2 flex text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5 ml-4'>
                    <span>Hide Filetree</span>
                    {isMobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative'>{modifierKey} L</span>}
                </button>
            </nav>

            <nav className={`md:w-0 md:h-0 fixed top-0 left-0 w-full h-[calc(2.25rem+2*1rem)] py-4 z-20`}>
                <div className={`md:hidden fixed top-0 w-full h-[calc(2.25rem+2*1rem)] bg-black bg-opacity-30 backdrop-blur-md -z-10 md:w-0 md:h-0`}/>
                <div className={`${active ? 'hidden' : 'visible'} bg-body ml-4 rounded-md`}>
                    <button onClick={toggleSidebar} className='hidden md:flex fixed right-[4.5rem] h-[2.25rem] text-elevated items-center space-x-6 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5'>
                        <FaFolderTree/>
                    </button>
                </div>
                <div className={`md:hidden bg-body ml-4 rounded-md absolute left-0`}>
                    <Popup buttonStyle='flex md:hidden h-[2.25rem] text-elevated items-center space-x-2 pl-4 bg-white bg-opacity-5 hover:bg-opacity-20 rounded-md px-3 py-1.5'
                        buttonContents={
                            <>
                                <FaFolderTree/>
                                {isMobile || modifierKey === '' ? <></> : <span className='text-sm font-bold relative hidden sm:inline'>{modifierKey} L</span>}
                            </>
                        }
                        keyboardShortcutIndex={0}
                    >
                        <div className='w-full h-full py-4'>
                            {children}
                        </div>
                    </Popup>
                </div>
                <Popup buttonStyle='text-base text-elevated mr-4 flex bg-body space-x-4'
                    buttonContents={
                        <>
                            <div className={`flex items-center w-[50vw] fixed right-[1rem] ${active ? 'md:w-[calc(300px-2rem)] md:left-[1rem] md:top-16' : 'md:hidden'} bg-black px-3 py-1.5 hover:ring-2 ring-bold rounded-md hover:bg-white hover:bg-opacity-10`}>
                                <FaSearch className='mr-3 h-full shrink-0'/>
                                <span className='italic'>Search...</span>
                                {isMobile || modifierKey === '' ? <></> : <span className='ml-auto pl-3 text-sm font-bold hidden sm:block'>{modifierKey} K</span>}
                            </div>
                            <div className={`${active ? 'hidden' : 'hidden md:flex'} bg-white fixed right-4 bg-opacity-5 hover:bg-opacity-20 h-[2.25rem] rounded-md px-3 py-1.5`}>
                                <FaSearch className='mr-0 h-full'/>
                            </div>
                        </>
                    }
                    keyboardShortcutIndex={1}
                    listenWhenLarge={true}
                    escButtonInsideModal={true}
                /> {/* no children means render search component by default */}
            </nav>
        </>
    )

}