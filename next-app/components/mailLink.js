import ProminentLink from './prominentLink.js'

export default function MailLink( {children} ) {
    return (
        <ProminentLink href='mailto:danielc.rocks12@gmail.com'>{ children }</ProminentLink>
    )
}