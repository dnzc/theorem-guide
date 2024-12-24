
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'
import { ToastContainer } from 'react-toastify'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'

import { FaBook } from 'react-icons/fa'
import { GrArticle } from "react-icons/gr";
import { AiFillFolder } from 'react-icons/ai'
import Folder from '@/components/folder'


export default function AMetricSpaces () {
    return (
        <Layout>
            <Head>
                <title>A Metric Spaces | Daniel C</title>
            </Head>
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

        <div className="overflow-y-auto w-full md:w-[calc(300px-2px)] h-full md:h-[calc(100vh-15rem)] break-all bg-background pt-3 md:pt-0 md:border-y-2 border-border-subtle">
            <div className="relative bottom-0">
                <ul className="dirtree mb-4 md:mb-0 group">
                    
                    

                    
                        <Link href="/maths">
                            <li className="w-full flex justify-start p-1 pl-2 hover:bg-background-hover">
                                <div className="flex items-center justify-center space-x-1 text-text-secondary text-base">
                                    <CiLogout size="19"/>
                                    <p>exit course</p>
                                </div>
                            </li>
                        </Link>
                    
                    
                        
                            <Accordion title="Analysis-Topology" href="/maths/Analysis-Topology" type="course" relDepth={ 0 } isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="A-metric-spaces" href="/maths/Analysis-Topology/A-metric-spaces" type="folder" relDepth={ 1 } isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                                        
                        
                            <Accordion title="1-basics" href="/maths/Analysis-Topology/A-metric-spaces/1-basics" type="file" relDepth={ 2 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                                    
                                        
                        
                            <Accordion title="example-sheets" href="/maths/Analysis-Topology/example-sheets" type="file" relDepth={ 1 } isSelected={ false } />
                        
                    
                                    
                                
                            </Accordion>
                        
                    
                </ul>
            </div>
        </div>

    </Sidebar>

    <article className="w-full min-w-0 px-6 pt-3 mb-14">

        <div className="h-[4.5rem] md:h-0"/>

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths">maths</Link></p>
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology">Analysis-Topology</Link></p>
                
                    <span className="font-bold text-text-secondary">/</span>
                    <p className="text-lg font-bold text-link underline [@media(hover:hover)]:hover:underline"><Link href="/maths/Analysis-Topology/A-metric-spaces">A-metric-spaces</Link></p>
                
            </div>
        

        

        <div className="article mb-4">
            <div>

    <p className="italic pb-4">Contains 1 article</p>

    
    <Folder
        contents_by_date={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces/1-basics">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0"/>
                        
                        <p className="relative bottom-[1px]">1-basics</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
        contents_by_name={<> 
        
            <li className="folder-li w-full flex justify-between items-center border-border-strong border-b-2 py-2 px-3">
                <Link href="/maths/Analysis-Topology/A-metric-spaces/1-basics">
                    <div className="flex items-center space-x-1 text-lg underline">
                        
                            <AiFillFolder className="shrink-0"/>
                        
                        <p className="relative bottom-[1px]">1-basics</p>
                    </div>
                </Link>
                <p className="text-sm break-normal text-center sm:shrink-0 ml-2">16 Dec 2024</p>
            </li>
        
     </>}
    />

</div>
        </div>

        
            <div className="border-t-2 border-border-strong pt-4 flex items-top justify-between">
                
                    <div className="flex justify-start">
                        <Link href="/maths/Analysis-Topology">
                            <div className="flex items-center justify-center space-x-1 text-text-secondary underline">
                                <RiArrowGoBackFill/>
                                <p>up a level</p>
                            </div>
                        </Link>
                    </div>
                

                
            </div>
        

    </article>

    
</div>
                </>
        </Layout>
    )
}
    