
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'
import Badge from '@/components/badge'
import { ToastContainer } from 'react-toastify'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'

import { FaBook } from 'react-icons/fa'
import { GrArticle } from 'react-icons/gr'
import { AiFillFolder } from 'react-icons/ai'
import Folder from '@/components/folder'


export const metadata = {title:"maths"}

export default function Page () {
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                theme='light'
            />
            <div className="relative w-full 2xl:max-w-[90%] flex h-full"> {/* whole thing (including large-screen left space filler, which is 10%) is max 90%; so 10% each side */}
    <Sidebar>

        
        <div className="scrollshadow-vertical overflow-y-auto w-full md:w-[calc(270px-2px)] min-h-10 h-[70vh] md:h-[calc(100vh-12rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
                <ul className="scrollshadow-vertical dirtree mb-4 md:mb-0 group">
                    
                    

                    
                    
                        
                            <Accordion title="root" href="" type="folder" relDepth={ 0 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Daniel's Notes" href="/dnzc" type="course" relDepth={ 1 } isSelected={ false } />
                        
                    
                                    
                                        
                        
                            <Accordion title="maths" href="/maths" type="folder" relDepth={ 1 } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="Analysis & Topology" href="/maths/analysis-and-topology" type="course" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
        </div>

    

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        <div className="flex flex-wrap items-center space-x-2 mb-3">
            
                <div className="flex flex-wrap items-center align-middle space-x-1 mr-2">
                    
                        <span className="font-bold text-text-secondary">/</span>
                        <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                    
                </div>
            

            
        </div>

        

        <div className="article mb-4">
            <div>

    <p className="italic pb-4">Contains 3 articles</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths/analysis-and-topology">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <FaBook className="shrink-0 text-course-icon"/>
                        
                        <p className="relative bottom-[1px]">Analysis & Topology</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong bg-Table-rows border-t-2 py-2 px-3">
                <Link href="/maths/analysis-and-topology">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <FaBook className="shrink-0 text-course-icon"/>
                        
                        <p className="relative bottom-[1px]">Analysis & Topology</p>
                    </div>
                </Link>
                <p className="text-sm text-text-secondary break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        
            <div className="border-t-2 border-border-subtle pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
            </div>
        

        <div className="border-t-2 border-border-subtle pt-4 mt-8 text-sm text-text-secondary">
            <p>This educational content is licensed under <DiscreetLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</DiscreetLink>. You may share and adapt with attribution.</p>
        </div>

    </article>

    
</div>
        </>
    )
}
    