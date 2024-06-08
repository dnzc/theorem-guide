import { toast } from 'react-toastify'
import { TbClipboardCopy } from 'react-icons/tb'

function copyToClipboard(text, isLink) {
    toast(`${isLink ? 'Link' : 'Text'} copied to clipboard`)
    navigator.clipboard.writeText(text.replace(/\\n/g, '\n'))
}

function CopyButton({ text, children }) {
    return (
        <span className='space-x-1'>
            <span>
                {children}
            </span>
            <button className='relative top-0.5 text-primary hover:text-secondary' onClick={() => copyToClipboard(text, false)}><TbClipboardCopy/></button>
        </span>
    )
}

export { copyToClipboard, CopyButton };