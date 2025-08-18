'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RandomLink({ articles, children, className }) {
    const [currentHref, setCurrentHref] = useState(() => {
        if (typeof window !== 'undefined' && articles && articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length)
            return articles[randomIndex]
        }
        return '/maths' // fallback
    })

    const handleClick = (e) => {
        // Generate new random link for next time
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