import { useMiniSearch } from 'react-minisearch'
import documents from '@/article_data.json'
import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const miniSearchOptions = {
    fields: ['title', 'name', 'dir', 'content'],
}

export default function Search({ active, hidePopupFunction }) {

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

    function getPath(folder_dir, name) {
        let path = folder_dir.join('/') + '/' + name
        if(!path.startsWith('/')) path = '/' + path
        return path
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
            router.push(getPath(result.dir, result.name))
            router.refresh() // else, if select search result equal to current page then nothing happens
        }
    }

    function substrsToRegex(spaceSeparatedSubstrs) {
        spaceSeparatedSubstrs = spaceSeparatedSubstrs.trim()
        if(spaceSeparatedSubstrs.length == 0) return null
        // escape regex chars in substrings
        spaceSeparatedSubstrs = spaceSeparatedSubstrs.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

        // brackets around the regexp means delimiters are kept on split

        // highlight individual characters
        return new RegExp('('+ spaceSeparatedSubstrs.replaceAll(' ', '|') + ')', 'gi')

        // highlight whole word
        //return new RegExp('(\\b(?=\\w*[' + spaceSeparatedSubstrs.replaceAll(' ', '|') + '])\\w+\\b)', 'gi')
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

            {/* https://stackoverflow.com/questions/38619762/how-to-prevent-ios-keyboard-from-pushing-the-view-off-screen-with-css-or-js */}
            <input ref={inputRef} type='text' name='search' onChange={searchChange} onKeyDown={handleKeyDown} onFocus={() => { window.scrollTo(0,0); document.body.scrollTop = 0 }} placeholder='Search…' className='bg-body rounded-t-lg rounded-b-none px-4 py-4 w-full border-b-2 border-elevated text-lg outline-none'/>

            <div id='results-div' className='relative w-full h-[calc(100%-4rem)] overflow-y-scroll' onTouchMove={ /* hide onscreen keyboard */ () => document.activeElement.blur()}>
                <ol>
                    { searchResults && searchResults.map((result, i) => {
                        let re = substrsToRegex(inputRef.current.value)
                        if(!re) return
                        let title = highlightMatchesInString(re, result.title, 'text-highlight-pink font-bold')
                        let matchedTitle = title.length>1 // split into at least two tokens means found match

                        let jsxDir = []
                        let matchedDir = false
                        result.dir.forEach((folder) => {
                            let tokens = highlightMatchesInString(re, folder, 'text-highlight-orange font-bold')
                            if(tokens.length>1) matchedDir = true
                            jsxDir.push(...tokens)
                            jsxDir.push(<span className='font-bold text-text-secondary mx-0.5'>/</span>)
                        })
                        let name = highlightMatchesInString(re, result.name, 'text-highlight-orange font-bold')
                        let matchedName = name.length>1
                        jsxDir.push(...name)

                        // highlighting content is probably too slow to be worth it, when the site gets big
                        // don't show content, too messy
                        /*
                        let content = result.content
                        content = content.slice(0, 90) + '...'
                        */

                        return (
                            <li key={i} id={`result-${i}`} className='m-4 text-text-primary' onMouseMove={() => {setSelectedResult(i)}} onTouchStart={() => {setSelectedResult(i)}}>
                                <Link href={getPath(result.dir, result.name)}>
                                    <div className={`${i==selectedResult ? 'bg-layer-hover' : 'bg-layer'} rounded-lg flex justify-between`} onClick={hidePopupFunction}>
                                        <div className='p-4 pt-2'>
                                            <p className='text-text-secondary flex flex-wrap items-center align-middle mb-1'>{jsxDir}</p>
                                            <p className='text-xl'>{title}</p>
                                            <p className={`${matchedTitle||matchedDir||matchedName ? 'hidden ' : 'mt-1'} italic text-link`}>Content matches</p>
                                        </div>
                                        <div className='flex justify-center items-center px-2 rounded-r-lg'>
                                            <p className={`text-lg${i==selectedResult ? ' text-text-inverse' : ''}`}><FaArrowRight/></p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }) }
                </ol>
            </div>
        </div>
    )
}