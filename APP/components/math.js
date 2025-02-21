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
            <div className="font-bold">
                <span className="text-highlight-pink italic">{type}{num>-1?<> {num}</>:<></>}.</span> {name ? <span className="text-text-secondary">({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className="sm:pl-4">
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className="sm:space-y-1 !border-highlight-pink">
            {contents}
        </div>
     :
        <blockquote className="sm:space-y-1 !border-highlight-pink">
            {contents}
        </blockquote>
}

export function Proof({ children, outofline=false, type='Proof', name='', unquoted=false }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className="">
                <span className="text-highlight-orange italic">{type}.</span> {name ? <span className="text-text-secondary">({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className="sm:pl-4">
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className="sm:space-y-1 !border-highlight-orange">
            {contents}
        </div>
     :
        <blockquote className="sm:space-y-1 !border-highlight-orange">
            {contents}
        </blockquote>
}

export function Defn({ children, outofline=false, name='', unquoted=false}) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className="font-bold">
                <span className="text-highlight-blue italic">Defn.</span> {name ? <span className="text-text-secondary">({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className="sm:pl-4">
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className="defn sm:space-y-1">
            {contents}
        </div>
     :
        <blockquote className="defn sm:space-y-1 !border-highlight-blue">
            {contents}
        </blockquote>
}


export function Example({ children, outofline=false, name='', quoted=false, plural=false }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className="font-bold">
                <span className="text-highlight-orange italic">{plural ? <>Examples</>:<>Example</>}.</span> {name ? <span className="text-text-secondary">({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className="sm:pl-4">
            {other_children ? other_children : <></>}
        </div>
    </>
    return !quoted ? 
        <div className="sm:space-y-1 !border-highlight-orange">
            {contents}
        </div>
     :
        <blockquote className="sm:space-y-1 !border-highlight-orange">
            {contents}
        </blockquote>
}

// for a proposition, use a lemma block
export function Lemma({ children, outofline=false, type='Lemma', name='', unquoted=false, num=-1 }) {
    let [first_child, other_children] = extract_first_child(children, outofline)
    let contents = <>
        <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
            <div className="font-bold">
                <span className="text-highlight-pink italic">{type}{num>-1?<> {num}</>:<></>}.</span> {name ? <span className="text-text-secondary">({name})</span> : <></>}
            </div>
            {first_child}
        </div>
        <div className="sm:pl-4">
            {other_children ? other_children : <></>}
        </div>
    </>
    return unquoted ? 
        <div className="sm:space-y-1 !border-highlight-pink">
            {contents}
        </div>
     :
        <blockquote className="sm:space-y-1 !border-highlight-pink">
            {contents}
        </blockquote>
}