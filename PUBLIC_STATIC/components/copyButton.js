import { toast } from 'react-toastify'
import { TbClipboardCopy } from 'react-icons/tb'

function copyToClipboard(text, isLink) {
    toast(`${isLink ? 'Link' : 'Text'} copied to clipboard`)
    navigator.clipboard.writeText(text.replace(/\\n/g, '\n'))
}

function CopyButton({ text, children }) {
    return (
        <div className='flex items-center space-x-1'>
            <p>
                {children}
            </p>
            <button className='text-primary hover:text-secondary' onClick={() => copyToClipboard(text, false)}><TbClipboardCopy/></button>
        </div>
    )
}

export { copyToClipboard, CopyButton };