import Link from 'next/link'
import { HiExternalLink } from "react-icons/hi";

export default function DiscreetLink( {href, children, internal=false} ) {
    let style = 'underline decoration-link underline-offset-2 hover:text-link'
    if(internal) {
        return (<Link href={href} className={style}>{children}</Link>)
    } else {
        return (
            <a href={href} className={`${style} group inline w-fit`} target='_blank'>
                <span>{children}</span>
                <HiExternalLink className="text-text-secondary group-hover:text-link inline-block w-4 h-4 ml-0.5 -translate-y-px" style={{lineHeight: 0}}/>
            </a>
        )
    }
}