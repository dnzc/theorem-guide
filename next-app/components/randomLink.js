'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function RandomLink({ articles, children, className }) {
    const [currentHref, setCurrentHref] = useState('')
    
    useEffect(() => {
        // set random article after mount to prevent hydration mismatch
        if (articles && articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length)
            setCurrentHref(articles[randomIndex])
        }
    }, [articles])

    const handleClick = (e) => {
        // generate new random link for next time
        if (articles && articles.length > 0) {
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