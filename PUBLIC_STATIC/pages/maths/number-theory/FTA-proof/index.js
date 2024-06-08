
import Layout from '@/components/layout'
import Head from 'next/head'
import Accordion from '@/components/accordion'
import Link from 'next/link'
import ProminentLink from '@/components/prominentLink'
import DiscreetLink from '@/components/discreetLink'
import MailLink from '@/components/mailLink'

import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { MdArticle } from 'react-icons/md'
import Folder from '@/components/folder'


export default function FTAProof () {
    return (
        <Layout>
            <Head>
                <title>FTA Proof | Daniel C</title>
            </Head>
                <>
                    
                    <div className="relative w-full max-w-screen-2xl flex h-full">
    <nav className="dirtree hidden md:flex w-[300px] md:shrink-0 md:justify-center h-100% min-h-screen border-r-2 border-elevated">
        <ul>
            <li>
                <span>
                    <Link href="/"> wiki.danielc.rocks </Link>
                </span>
                <ul>
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="FTA-proof" href="/maths/number-theory/FTA-proof" isFolder={true} isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="1-integer-axioms" href="/maths/number-theory/FTA-proof/1-integer-axioms" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="2-division-algo" href="/maths/number-theory/FTA-proof/2-division-algo" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="3-bezout-egcd" href="/maths/number-theory/FTA-proof/3-bezout-egcd" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="4-euclid" href="/maths/number-theory/FTA-proof/4-euclid" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="5-fta" href="/maths/number-theory/FTA-proof/5-fta" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="writeups" href="/writeups" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="terminal" href="/writeups/terminal" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>
    </nav>

    <article className="w-full min-w-0 max-w-6xl px-6 pt-3">

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory">number-theory</Link></p>
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths/number-theory/FTA-proof">FTA-proof</Link></p>
                
            </div>
        

        

        <div className="article mb-4">
            
    <p className="italic pb-4">Contains 5 articles and 0 folders</p>

    <Folder contents_by_date={
        <>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/5-fta">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">5-fta</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/1-integer-axioms">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">1-integer-axioms</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/3-bezout-egcd">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">3-bezout-egcd</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/2-division-algo">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">2-division-algo</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/4-euclid">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">4-euclid</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
        </>
    } contents_by_name={
        <>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/1-integer-axioms">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">1-integer-axioms</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/2-division-algo">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">2-division-algo</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/3-bezout-egcd">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">3-bezout-egcd</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/4-euclid">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">4-euclid</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
            <li className="folder-li w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory/FTA-proof/5-fta">
                    <div className="flex items-center space-x-1 text-lg">
                        
                            <MdArticle/>
                        
                        <p className="relative bottom-[1px]">5-fta</p>
                    </div>
                </Link>
                <p className="text-sm">27 Jul 2023</p>
            </li>
        
        </>
    } />

        </div>

        
            <div className="flex justify-start mb-4">
                <Link href="/maths/number-theory">
                    <div className="flex items-center justify-center space-x-1 text-primary">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>

    
</div>
                </>
        </Layout>
    )
}
    