import Link from 'next/link'
import { HiExternalLink } from "react-icons/hi";

export default function ProminentLink( {href, children, internal=false} ) {
    if(internal) {
        return <Link href={href} className='font-bold text-link hover:text-hover'>{children}</Link>
    } else {
        return (
            <a href={href} className='font-bold text-link hover:text-hover group inline-flex items-baseline w-fit' target='_blank'>
                <span>{children}</span>
                <HiExternalLink className="text-elevated group-hover:text-hover relative top-0.5"/>
            </a>
        )
    }
}