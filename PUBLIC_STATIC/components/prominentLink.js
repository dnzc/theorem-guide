import Link from 'next/link'

export default function ProminentLink( {href, children} ) {
    return (
        <Link href={href} className='font-bold text-link hover:text-hover' target='_blank'>&gt;{children}&lt;</Link>
    )
}