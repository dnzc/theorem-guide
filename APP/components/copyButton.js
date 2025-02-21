import { toast } from 'react-toastify'
import { TbClipboardCopy } from 'react-icons/tb'

function copyToClipboard(text, isLink) {
    toast(MyToast(`${isLink ? 'Link' : 'Text'} copied to clipboard`))
    navigator.clipboard.writeText(text.replace(/([^\\])\\n/g, '$1\n').replace(/\\\\n/g, '\\n')) // emulates writing '\n' for newline and '\\n' for literal
}

function MyToast(text) {
    return <div className="text-text-primary font-text text-base">{text}</div>
}

function CopyButton({ text, size=20, children }) {
    if(children)
        return (
           <button className='text-text-secondary bg-layer [@media(hover:hover)]:hover:bg-layer-hover px-3 py-1.5 rounded-md' onClick={() => copyToClipboard(text, false)}>
                {children}
            </button>
        )
    else
        return (
            <button className='bg-layer relative top-0.5 text-highlight-orange [@media(hover:hover)]:hover:bg-layer-hover px-0.5 py-1 rounded-md' onClick={() => copyToClipboard(text, false)}>
                <TbClipboardCopy size={size}/>
            </button>
        )
}

export { copyToClipboard, CopyButton }