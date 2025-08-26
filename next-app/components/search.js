'use client'

import { useMiniSearch } from 'react-minisearch'
import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaBook } from 'react-icons/fa'
import Link from 'next/link'
import documents from '../article_data.json'
import { useRouter } from 'next/navigation'
import { GrArticle } from 'react-icons/gr'
import { AiFillFolder } from 'react-icons/ai'
const miniSearchOptions = {
    fields: ['title', 'name', 'dir', 'content', 'type'],
}

export default function Search({ active, hidePopupFunction }) {
    const { search, searchResults, clearSearch } = useMiniSearch(documents, miniSearchOptions)

    const [ selectedResult, setSelectedResult ] = useState(0)

    const router = useRouter()

    let inputRef = useRef('')

    const [ mouseLocked, setMouseLocked ] = useState(false)

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

    // prevent bug where if mouse is hovering over result and arrow keys pressed,
    // the change of scroll is registered as a mouse move and so the selected result is
    // unwantingly changed again, even though mouse was not actually moved
    function lockMouse() {
        setMouseLocked(true)
    }

    function unlockMouse() {
        setMouseLocked(false)
    }

    function handleKeyDown(e) {
        if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            if(searchResults.length == 0) return
            e.preventDefault()
            lockMouse()
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

    function highlightMatchesInString(re, str, highlightedStyle, keyOffset=0) {
        var tokens = []
        str.split(re).forEach((token, i) => {
            if(re.test(token)) tokens.push(<span key={i+keyOffset} className={highlightedStyle}>{token}</span>)
            else tokens.push(<span key={i+keyOffset}>{token}</span>)
            re.lastIndex = 0
        })
        return tokens
    }

    return (
        <div className='w-full h-full' onMouseMove={unlockMouse}>

            {/* https://stackoverflow.com/questions/38619762/how-to-prevent-ios-keyboard-from-pushing-the-view-off-screen-with-css-or-js */}
            <input ref={inputRef} type='text' name='search' onChange={searchChange} onKeyDown={handleKeyDown} onFocus={() => { window.scrollTo(0,0); document.body.scrollTop = 0 }} placeholder='Search…' className='bg-background rounded-t-lg placeholder:text-text-placeholder placeholder:italic rounded-b-none px-4 py-4 w-full border-b-2 border-border-strong text-lg outline-none'/>

            <div id='results-div' className='relative w-full h-[calc(100%-4rem)] overflow-y-scroll' onTouchMove={ /* hide onscreen keyboard */ () => document.activeElement.blur()}>
                <ol>
                    { searchResults && searchResults.map((result, i) => {
                        let re = substrsToRegex(inputRef.current.value)
                        if(!re) return
                        let title = highlightMatchesInString(re, result.title, 'text-Searchpopup-highlight-title font-bold')
                        let matchedTitle = title.length>1 // split into at least two tokens means found match

                        let jsxDir = []
                        let matchedDir = false
                        result.dir.forEach((folder) => {
                            let tokens = highlightMatchesInString(re, folder, 'text-Searchpopup-highlight-dir font-bold', jsxDir.length)
                            if(tokens.length>1) matchedDir = true
                            jsxDir.push(...tokens)
                            jsxDir.push(<span key={jsxDir.length} className='font-bold text-text-secondary mx-0.5'>/</span>)
                        })
                        let name = highlightMatchesInString(re, result.name, 'text-Searchpopup-highlight-dir font-bold', jsxDir.length)
                        let matchedName = name.length>1
                        jsxDir.push(...name)

                        // highlighting content is probably too slow to be worth it, when the site gets big
                        // don't show content, too messy
                        /*
                        let content = result.content
                        content = content.slice(0, 90) + '...'
                        */

                        let icon = <span className='text-article-icon'><GrArticle size={20}/></span>;
                        if (result.type === 'book') icon = <span className='text-book-icon'><FaBook size={20}/></span>;
                        if (result.type === 'folder') icon = <span className='text-folder-icon'><AiFillFolder size={20}/></span>;

                        return (
                            <li key={i} id={`result-${i}`} className='m-4 text-text-primary' onMouseMove={() => {if(!mouseLocked) setSelectedResult(i)}} onTouchStart={() => {setSelectedResult(i)}}>
                                <Link href={getPath(result.dir, result.name)}>
                                    <div className={`${i==selectedResult ? 'bg-Searchpopup-result-selected' : 'bg-Searchpopup-result'} rounded-lg flex justify-between`} onClick={hidePopupFunction}>
                                            <div className='flex align-middle'>
                                                <span className='shrink-0 my-auto mx-4'>{icon}</span>
                                                <div className='pt-3 pb-4 pl-4 h-full border-l-2 border-border-strong'>
                                                    <p className='text-text-secondary flex flex-wrap items-center align-middle mb-1'>{jsxDir}</p>
                                                    <p className='text-xl'>{title}</p>
                                                    <p className={`${matchedTitle||matchedDir||matchedName ? 'hidden ' : 'mt-1'} italic text-Searchpopup-highlight-content`}>Content matches</p>
                                                </div>
                                            </div>
                                        <div className='flex justify-center items-center px-2 rounded-r-lg'>
                                            <p className={`text-lg${i==selectedResult ? ' text-Searchpopup-arrow-selected' : ''}`}><FaArrowRight/></p>
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