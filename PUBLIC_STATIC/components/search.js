import { useMiniSearch } from 'react-minisearch'
import documents from '@/articles.js'
import { useEffect, useRef, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const miniSearchOptions = {
    fields: ['title', 'name', 'dir', 'content'],
}

export default function Search({ active }) {

    const { search, searchResults, clearSearch } = useMiniSearch(documents, miniSearchOptions)

    const [ selectedResult, setSelectedResult ] = useState(0)

    const router = useRouter()

    let inputRef = useRef('')

    useEffect(() => {
        if(!active && inputRef.current) {
            inputRef.current.value = ''
            clearSearch()
        } else if(active && inputRef.current) {
            inputRef.current.focus()
        }
    }, [active])

    function searchChange(event) {
        search(event.target.value, { prefix : true, boost: {title:6,name:4,dir:2} })
        setSelectedResult(0)
    }

    function handleKeyDown(e) {
        if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            if(searchResults.length == 0) return
            e.preventDefault()
            let newSelectedResult = (selectedResult + (e.key === 'ArrowUp' ? searchResults.length-1 : 1) ) % searchResults.length
            const result = document.getElementById(`result-${newSelectedResult}`)
            const resultDiv = document.getElementById('results-div')
            // offsetHeight: height of the element, scrollTop: y-coord of current scroll pos, offsetTop: y-coord of element relative to parent
            if(result.offsetTop - resultDiv.scrollTop < 0) resultDiv.scrollTop = result.offsetTop
            if(result.offsetTop - resultDiv.scrollTop + result.offsetHeight > resultDiv.offsetHeight) resultDiv.scrollTop = result.offsetTop - resultDiv.offsetHeight + result.offsetHeight
            setSelectedResult(newSelectedResult)
        } else if (e.key == 'Enter') {
            let result = searchResults[selectedResult]
            router.push('/' + result.dir.join('/') + '/' + result.name)
        }
    }

    function substrsToRegex(spaceSeparatedSubstrs) {
        spaceSeparatedSubstrs = spaceSeparatedSubstrs.trim()
        if(spaceSeparatedSubstrs.length == 0) return null
        // escape regex chars in substrings
        spaceSeparatedSubstrs = spaceSeparatedSubstrs.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
        // brackets around the regexp means delimiters are kept on split
        return new RegExp('('+ spaceSeparatedSubstrs.replaceAll(' ', '|') + ')', 'gi')
    }

    function highlightMatchesInString(re, str, highlightedStyle) {
        var tokens = []
        str.split(re).forEach((token) => {
            if(re.test(token)) tokens.push(<span className={highlightedStyle}>{token}</span>)
            else tokens.push(<span>{token}</span>)
            re.lastIndex = 0
        })
        return tokens
    }

    return (
        <div className='w-full h-full'>
            <input ref={inputRef} type='text' onChange={searchChange} onKeyDown={handleKeyDown} placeholder='Search…' className='bg-body rounded-t-lg w-full px-4 py-4 text-lg outline-none border-b-2 border-elevated'/>

            <div id='results-div' className='relative w-full h-[calc(100%-4rem)] overflow-y-scroll'>
                <ol>
                    { searchResults && searchResults.map((result, i) => {
                        let re = substrsToRegex(inputRef.current.value)
                        if(!re) return
                        let title = highlightMatchesInString(re, result.title, 'text-primary')
                        let matchedTitle = title.length>1 // split into at least two tokens means found match

                        let jsxDir = []
                        let matchedDir = false
                        result.dir.forEach((folder) => {
                            let tokens = highlightMatchesInString(re, folder, 'text-secondary font-bold')
                            if(tokens.length>1) matchedDir = true
                            jsxDir.push(...tokens)
                            jsxDir.push(<>&nbsp;<FaChevronRight className='text-elevated relative top-[1px]' size={12}/>&nbsp;</>)
                        })
                        let name = highlightMatchesInString(re, result['name'], 'text-white font-bold')
                        let matchedName = name.length>1
                        jsxDir.push(...name)

                        let content = result.content
                        // highlighting content is probably too slow to be worth it, when the site gets big
                        /*re.lastIndex = 0
                        let search = re.exec(content)
                        if(search) {
                            content = content.slice(Math.max(0,search.index-20),search.index+50)
                        }
                        content = highlightMatchesInString(re, content.slice(0, 70))*/

                        // instead, just truncate the content
                        content = content.slice(0, 90) + '...'

                        return (
                            <li key={i} id={`result-${i}`} className={`p-4 pt-2 border-b border-elevated last:border-none text-elevated ${i==selectedResult ? 'bg-black bg-opacity-30' : ''}`} onMouseEnter={() => {setSelectedResult(i)}}>
                                <Link href={'/'+result['dir'].join('/')+'/'+result['name']}>
                                    <p className='flex flex-wrap items-center align-middle mb-1'>{jsxDir}</p>
                                    <p className='text-xl font-bold mb-1'>{title}</p>
                                    <p className={`${matchedTitle||matchedDir||matchedName ? 'text-elevated' : 'text-white font-bold'} ml-4`}>{content}</p>
                                </Link>
                            </li>
                        )
                    }) }
                </ol>
            </div>
        </div>
    )
}