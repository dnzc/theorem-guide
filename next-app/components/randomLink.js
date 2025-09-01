'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function RandomLink({ articles, children, className }) {
    const [currentHref, setCurrentHref] = useState('')
    const isMounted = useRef(true)
    
    useEffect(() => {
        // set random article after mount to prevent hydration mismatch
        if (articles && articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length)
            if (isMounted.current) {
                setCurrentHref(articles[randomIndex])
            }
        }
        
        return () => {
            isMounted.current = false
        }
    }, [articles])

    const handleClick = (e) => {
        // generate new random link for next time
        if (articles && articles.length > 0 && isMounted.current) {
            const randomIndex = Math.floor(Math.random() * articles.length)
            setCurrentHref(articles[randomIndex])
        }
    }

    return (
        <Link href={currentHref} className={className} onClick={handleClick}>
            {children}
        </Link>
    )
}