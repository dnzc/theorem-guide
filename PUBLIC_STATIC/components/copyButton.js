import { toast } from 'react-toastify'
import { TbClipboardCopy } from 'react-icons/tb'

function copyToClipboard(text, isLink) {
    toast(`${isLink ? 'Link' : 'Text'} copied to clipboard`)
    navigator.clipboard.writeText(text.replace(/([^\\])\\n/g, '$1\n').replace(/\\\\n/g, '\\n')) // emulates writing '\n' for newline and '\\n' for literal
}

function CopyButton({ text, size=20, children }) {
    if(children)
        return (
            <button className='text-elevated bg-white bg-opacity-5 [@media(hover:hover)]:hover:bg-opacity-20 px-3 py-1.5 rounded-md' onClick={() => copyToClipboard(text, false)}>
                {children}
            </button>
        )
    else
        return (
            <button className='relative top-0.5 text-primary hover:text-secondary' onClick={() => copyToClipboard(text, false)}>
                <TbClipboardCopy size={size}/>
            </button>
        )
}

export { copyToClipboard, CopyButton }