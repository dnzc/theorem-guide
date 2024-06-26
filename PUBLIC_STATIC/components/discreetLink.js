import Link from 'next/link'

export default function DiscreetLink( {href, children} ) {
    return (
        <Link href={href} className='underline decoration-primary underline-offset-2 hover:text-primary' target='_blank'>{children}</Link>
    )
}