
import Layout from '../components/layout'
import Accordion from '../components/accordion'
import ProminentLink from '../components/prominentLink'
import DiscreetLink from '../components/discreetLink'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { FaChevronRight } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { MdArticle } from 'react-icons/md'
import Folder from '../components/folder'


export default function Root () {
    return (
        <Layout>
            <div className="relative max-w-screen-xl flex h-full">
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
                                
                                    
                        
                            <Accordion title="number-theory" href="/maths/number-theory" isFolder={true} isSelected={ false } isOpenByDefault={ false } >
                                
                                    
                        
                            <Accordion title="FTA" href="/maths/number-theory/FTA" isFolder={false} isSelected={ false } />
                        
                    
                                
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

        

        

        <div className="article mb-4">
            <div className="space-y-6 border-b-2 border-elevated mb-6 pb-8">

    <div className="text-xs font-mono leading-[0.9rem] flex flex-col">
        <div className="hidden sm:block">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">&amp;</span></span></span><span className="text-yellow-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">&amp;&amp;<span className="text-green-800">&amp;&amp;</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">\</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;<span className="text-yellow-400">\<span className="text-green-800">&amp;&amp;</span></span></span>&nbsp;&nbsp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">/</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="text-green-800">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-yellow-400">/<span className="text-green-800">&amp;</span></span></span></span></span></span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><br/><span className="text-green-800">&amp;</span>&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;<span className="font-bold text-green-400">&amp;&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800">&amp;&amp;&amp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;&amp;&amp;</span></span></span></span><span className="font-bold text-green-400">&amp;</span><span className="text-yellow-400">~</span><span className="font-bold"><span className="font-bold text-yellow-800">\<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;&amp;</span></span></span></span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-green-800">&amp;&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold text-green-400">&amp;</span><br/>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">&amp;&amp;</span></span>&nbsp;<span className="text-yellow-400">&amp;</span>&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\_</span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">|\<span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">\/|\</span></span><span className="text-yellow-400">/<span className="text-green-800">&amp;&amp;&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="text-green-800">&amp;&amp;</span><span className="font-bold text-green-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\__</span><span className="font-bold"><span className="font-bold text-yellow-800">\__</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">\<span className="font-bold text-green-400">&amp;</span></span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><span className="text-green-800">&amp;&amp;&amp;</span>&nbsp;<span className="text-yellow-400">|/</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">|/</span></span></span></span></span><span className="font-bold text-green-400">&amp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">\|</span></span><span className="text-yellow-400">|/</span><span className="font-bold"><span className="font-bold text-yellow-800">~</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">\</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">\|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400"><span className="text-green-800">&amp;</span></span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;&amp;</span></span><span className="text-yellow-400">&amp;<span className="font-bold text-green-400">&amp;</span></span>&nbsp;<span className="font-bold"><span className="text-green-800"><span className="font-bold">&amp;<br/></span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">|//</span><span className="font-bold"><span className="font-bold text-yellow-800">|\</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-800">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="font-bold text-green-400">&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;</span></span><span className="text-yellow-400">_&amp;</span><span className="font-bold"><span className="font-bold text-green-400">&amp;&amp;</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-green-400"><span className="font-bold text-yellow-800">\|</span></span></span><span className="text-yellow-400">//|\</span>&nbsp;&nbsp;<span className="text-yellow-400">|/_</span><span className="font-bold"><span className="font-bold text-yellow-800">__/</span></span><span className="text-yellow-400">_/</span><span className="font-bold"><span className="font-bold text-green-400">&amp;<span className="font-bold text-yellow-800">_/</span></span></span>&nbsp;<span className="font-bold text-green-400">&amp;<span className="text-green-800">&amp;<span className="font-bold text-green-400">&amp;</span></span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-green-400"><span className="text-green-800"><span className="font-bold text-green-400"><span className="text-yellow-400">\</span></span></span></span><span className="font-bold"><span className="font-bold text-yellow-800">/~\</span></span><span className="text-yellow-400">|</span>&nbsp;&nbsp;<span className="text-yellow-400">\|</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span>&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">|/</span></span><span className="text-yellow-400">/|</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/|/</span><span className="font-bold"><span className="font-bold text-yellow-800">/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/</span><span className="font-bold"><span className="font-bold text-yellow-800">|/~</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">/~</span><span className="font-bold"><span className="font-bold text-yellow-800">/</span></span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold"><span className="font-bold text-yellow-800">//</span></span><span className="text-yellow-400">/~</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-yellow-800">./~~~\.</span>
        </div>

        <div className="hidden md:block text-primary font-bold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;__|&nbsp;|&nbsp;__&nbsp;_&nbsp;_&nbsp;__&nbsp;&#40;_&#41;&nbsp;___|&nbsp;|&nbsp;___&nbsp;&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;&nbsp;___|&nbsp;|&nbsp;_____&nbsp;<br/>&nbsp;/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|&nbsp;'_&nbsp;\|&nbsp;|/&nbsp;_&nbsp;\&nbsp;|/&nbsp;__|&nbsp;|&nbsp;'__/&nbsp;_&nbsp;\&nbsp;/&nbsp;__|&nbsp;|/&nbsp;/&nbsp;__|<br/>|&nbsp;&#40;_|&nbsp;|&nbsp;&#40;_|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;__/&nbsp;|&nbsp;&#40;__&nbsp;_|&nbsp;|&nbsp;|&nbsp;&#40;_&#41;&nbsp;|&nbsp;&#40;__|&nbsp;&nbsp;&nbsp;&lt;\__&nbsp;\<br/>&nbsp;\__,_|\__,_|_|&nbsp;|_|_|\___|_|\___&#40;_&#41;_|&nbsp;&nbsp;\___/&nbsp;\___|_|\_\___/
        </div>
    </div>

    <p className="block md:hidden text-3xl font-bold text-primary break-all">wiki.danielc.rocks</p>

    <p>Welcome to a public version of my knowledge base (see also: <DiscreetLink href="https://danielc.rocks">my homepage</DiscreetLink>). It contains nowhere near everything I've ever come across, only some of the topics I find interesting.</p>

    <p>I began this as a summer project in July 2023. It is still a work in progress; I am adding articles over time.</p>

    <div className="space-y-2">
        <p>If you're curious as to how this site is maintained, here is my workflow:</p>
        <ul className="space-y-2">
            <li className="list-disc ml-8">
                I use <ProminentLink href="https://nextjs.org/">next.js</ProminentLink> for the frontend, with styling from <ProminentLink href="https://tailwindcss.com/">tailwind</ProminentLink>. The web app is hosted publicly on <ProminentLink href="https://vercel.com/">vercel</ProminentLink>.
            </li>
            <li className="list-disc ml-8">
                I maintain a private <ProminentLink href="https://github.com/">github</ProminentLink> repository containing the master folder with all the contents of this wiki, in <ProminentLink href="https://www.markdownguide.org/getting-started/">markdown</ProminentLink> format. When I want to update the wiki, I edit the master folder using a markdown editor.
            </li>
            <li className="list-disc ml-8">
                I wrote a static site generator in <ProminentLink href="https://www.python.org/">python</ProminentLink> to generate html content out of the markdown in the master folder. It injects into <ProminentLink href="https://palletsprojects.com/p/jinja/">jinja2</ProminentLink> templates, then wraps it in boilerplate <ProminentLink href="https://react.dev/">react</ProminentLink>.
            </li>
            <li className="list-disc ml-8">
                When I am happy with my changes, I run a <ProminentLink href="https://www.geeksforgeeks.org/introduction-linux-shell-shell-scripting/"> shell script </ProminentLink> (I use arch btw) that executes the python file and pushes to the github repository.
            </li>
            <li className="list-disc ml-8">
                I use a <ProminentLink href="https://vercel.com/docs/concepts/deployments/deploy-hooks">vercel hook</ProminentLink> to automatically deploy the public site whenever the repository is changed.
            </li>
        </ul>
    </div>

    <p>This might sound complicated, but the end result is a fast web app (yay next.js) which is seamless to maintain - all I focus on is editing the folder containing the markdown files, then I run the shell script when I am happy to publish.</p>

    <p>Enjoy exploring!</p>

    <p className="text-elevated text-sm">P.S. if you think the ascii tree is cool (not visible on small screens), I generated it using <DiscreetLink href="https://gitlab.com/jallbrit/cbonsai">cbonsai</DiscreetLink>, <DiscreetLink href="https://github.com/pixelb/scripts/blob/master/scripts/ansi2html.sh">ansi2html</DiscreetLink> and some regex!</p>

</div>
    <p className="italic pb-4">Contains 0 articles and 2 folders</p>

    <Folder contents_by_date={
        <>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm">12 Jul 2023</p>
            </li>
        
        </>
    } contents_by_name={
        <>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/comp-sci">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">comp-sci</p>
                    </div>
                </Link>
                <p className="text-sm">11 Jul 2023</p>
            </li>
        
            <li className="w-full flex justify-between items-center border-elevated border-b-2 py-2 px-3">
                <Link href="/maths">
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                        
                        <p className="relative bottom-[1px]">maths</p>
                    </div>
                </Link>
                <p className="text-sm">12 Jul 2023</p>
            </li>
        
        </>
    } />

        </div>

        

    </article>
</div>
        </Layout>
    )
}
    