import Link from 'next/link'

export default function ExternalLink( {href, children} ) {
    return (
        <Link href={href} className="font-bold text-xlink hover:text-emph" target="_blank">{children}</Link>
    )
}