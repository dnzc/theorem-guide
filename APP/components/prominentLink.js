import Link from 'next/link'
import { HiExternalLink } from "react-icons/hi";

export default function ProminentLink( {href, children, internal=false} ) {
    if(internal) {
        return <Link href={href} className='font-bold text-link underline'>{children}</Link>
    } else {
        return (
            <a href={href} className='font-bold text-link underline group inline-flex items-baseline w-fit' target='_blank'>
                <span>{children}</span>
                <HiExternalLink className="text-text-secondary [@media(hover:hover)]:group-hover:text-link relative top-0.5"/>
            </a>
        )
    }
}