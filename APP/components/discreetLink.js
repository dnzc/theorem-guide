import Link from 'next/link'
import { HiExternalLink } from "react-icons/hi";

export default function DiscreetLink( {href, children, internal=false} ) {
    if(internal) {
        return (<Link href={href} className='underline decoration-primary underline-offset-2 hover:text-primary'>{children}</Link>)
    } else {
        return (
            <a href={href} className='underline decoration-primary underline-offset-2 hover:text-primary group inline-flex items-baseline w-fit' target='_blank'>
                <span>{children}</span>
                <HiExternalLink className="text-elevated group-hover:text-primary relative top-0.5"/>
            </a>
        )
    }
}