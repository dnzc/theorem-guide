import DiscreetLink from './discreetLink.js'

export default function MailLink( {children} ) {
    return (
        <DiscreetLink href='mailto:danielc.rocks12@gmail.com'>{ children }</DiscreetLink>
    )
}