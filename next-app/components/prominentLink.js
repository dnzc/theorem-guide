import Link from 'next/link'
import { HiExternalLink } from "react-icons/hi";

export default function ProminentLink( {href, children, internal=false} ) {
    if(internal) {
        return <Link href={href} className='font-bold text-link underline'>{children}</Link>
    } else {
        return (
            <a href={href} className='font-bold text-link underline group inline w-fit' target='_blank'>
                <span>{children}</span>
                <HiExternalLink className="text-text-secondary group-hover:text-link inline-block w-4 h-4 ml-0.5 -translate-y-px" style={{lineHeight: 0}}/>
            </a>
        )
    }
}