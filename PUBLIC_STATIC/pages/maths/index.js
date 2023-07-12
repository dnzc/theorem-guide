
import Layout from '../../components/layout'
import Accordion from '../../components/accordion'
import ProminentLink from '../../components/prominentLink'
import DiscreetLink from '../../components/discreetLink'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { MdArticle } from 'react-icons/md'
import Folder from '../../components/folder'


export default function Maths () {
    return (
        <Layout>
            <div className="relative max-w-screen-xl flex h-full">
    <nav className="dirtree hidden md:flex w-[300px] md:shrink-0 md:justify-center h-100% min-h-screen border-r-2 border-elevated">
        <ul>
            <li>
                <span className="w-full flex justify-center"> 
                    <Link href="/"> wiki.danielc.rocks </Link>
                </span>
                <ul>
                    
                        
                            <Accordion title="comp-sci" href="/comp-sci" isFolder={true} isSelected={ false } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="algorithms" href="/comp-sci/algorithms" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="binary-search" href="/comp-sci/algorithms/binary-search" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="maths" href="/maths" isFolder={true} isSelected={ true } isOpenByDefault={ true } >
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="FTA" href="/maths/number-theory/FTA" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="generators" href="/maths/number-theory/generators" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="quadratic-reciprocity" href="/maths/number-theory/quadratic-reciprocity" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="olympiad" href="/maths/olympiad" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="problems" href="/maths/olympiad/problems" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="IMO23" href="/maths/olympiad/problems/IMO23" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="techniques" href="/maths/olympiad/techniques" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="generating-funcs" href="/maths/olympiad/techniques/generating-funcs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="lagrange-multipliers" href="/maths/olympiad/techniques/lagrange-multipliers" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="moving-points" href="/maths/olympiad/techniques/moving-points" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                        
                            <Accordion title="research" href="/maths/research" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="CNATs" href="/maths/research/CNATs" isFolder={false} isSelected={ false } />
                        
                    
                        
                            <Accordion title="cube-tilings" href="/maths/research/cube-tilings" isFolder={false} isSelected={ false } />
                        
                    
                                
                            </Accordion>
                        
                    
                                
                            </Accordion>
                        
                    
                </ul>
            </li>
        </ul>
    </nav>

    <article className="w-full min-w-0 max-w-6xl px-6 pt-3">

        
            <div className="flex flex-wrap items-center align-middle space-x-1 mb-3">
                
                    <span className="relative top-[0.1em] text-elevated"> <FaChevronRight size={12}/> </span>
                    <p className="text-lg font-bold text-secondary"><Link href="/maths">maths</Link></p>
                
            </div>
        

        

        <div className="article mb-4">
            
    <p className="italic pb-4">Contains 0 articles and 3 folders</p>

    <Folder contents_by_date={
        <>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/olympiad">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">olympiad</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">number-theory</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/research">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">research</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
        </>
    } contents_by_name={
        <>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/number-theory">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">number-theory</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/olympiad">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">olympiad</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths/research">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">research</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
        </>
    } />

        </div>

        
            <div className="flex justify-start">
                <Link href="/">
                    <div className="flex items-center justify-center space-x-1 text-elevated">
                        <RiArrowGoBackFill/>
                        <p>up a level</p>
                    </div>
                </Link>
            </div>
        

    </article>
</div>
        </Layout>
    )
}
    