import { FaLightbulb } from 'react-icons/fa'
import { PiWarningCircleBold } from 'react-icons/pi'

function extract_first_child(children, outofline) {
    if(outofline) return [[], children]
    let first_child = children
    let other_children = []
    if(children.constructor === Array) {
        first_child = children[0]
        other_children = children.slice(1)
    }
    return [first_child, other_children]
}

// all blocks derived from thm
export function Thm({ children, outofline=false, type='Theorem', name='', unquoted=false, num=-1 }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className='font-bold'>
                <span className='text-Math-accent-thm italic'>{type}{num>-1?<> {num}</>:<></>}.</span> {name ? <span className='text-text-secondary'>({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className='sm:pl-4'>
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className='sm:space-y-1 !border-Math-accent-thm'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-thm'>
            {contents}
        </blockquote>
}

export function Proof({ children, outofline=false, type='Proof', name='', unquoted=false }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className=''>
                <span className='text-Math-accent-proof italic'>{type}.</span> {name ? <span className='text-text-secondary'>({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className='sm:pl-4'>
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className='sm:space-y-1 !border-Math-accent-proof'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-proof'>
            {contents}
        </blockquote>
}

export function Defn({ children, outofline=false, name='', unquoted=false}) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className='font-bold'>
                <span className='text-Math-accent-defn italic'>Defn.</span> {name ? <span className='text-text-secondary'>({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className='sm:pl-4'>
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className='defn sm:space-y-1'>
            {contents}
        </div>
     :
        <blockquote className='defn sm:space-y-1 !border-Math-accent-defn'>
            {contents}
        </blockquote>
}


export function Example({ children, outofline=false, name='', quoted=false, plural=false }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className='font-bold'>
                <span className='text-Math-accent-example italic'>{plural ? <>Examples</>:<>Example</>}.</span> {name ? <span className='text-text-secondary'>({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className='sm:pl-4'>
            {other_children ? other_children : <></>}
        </div>
    </>
    return !quoted ? 
        <div className='sm:space-y-1 !border-Math-accent-example'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-example'>
            {contents}
        </blockquote>
}

// for a proposition, use a lemma block
export function Lemma({ children, outofline=false, type='Lemma', name='', unquoted=false, num=-1 }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className='font-bold'>
                <span className='text-Math-accent-lemma italic'>{type}{num>-1?<> {num}</>:<></>}.</span> {name ? <span className='text-text-secondary'>({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className='sm:pl-4'>
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className='sm:space-y-1 !border-Math-accent-lemma'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-lemma'>
            {contents}
        </blockquote>
}

export function KeyIdea({ children, unquoted=false }) {
    let contents = <>
        <div className='flex items-start space-x-3'>
            <span className='text-Math-accent-keyidea flex items-center mt-1'>
                <FaLightbulb size={16} />
            </span>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    </>
    
    return unquoted ? 
        <div className='sm:space-y-1 !border-Math-accent-keyidea'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-keyidea'>
            {contents}
        </blockquote>
}

export function Warning({ children, unquoted=false }) {
    let contents = <>
        <div className='flex items-start space-x-3'>
            <span className='text-Math-accent-warning flex items-center mt-1'>
                <PiWarningCircleBold size={18} />
            </span>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    </>
    
    return unquoted ? 
        <div className='sm:space-y-1 !border-Math-accent-warning'>
            {contents}
        </div>
     :
        <blockquote className='sm:space-y-1 !border-Math-accent-warning'>
            {contents}
        </blockquote>
}