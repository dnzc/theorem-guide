// all nameable, and default inline
// numberable quoted block, possibly containing a proof: thm, lemma, prop
// proof is automatically unquoted if inside thm block
// the style of the word "proof" can be set to be less bold; this shouldn't be done manually, automatically done for proofs inside of thm blocks
// default unquoted: defn, example; everything else default quoted
// retypeable: thm, proof (e.g. to claim, justification); if renamed then not bold or underlined
// example can be plural, in which case it is set to outofline

function render_statement(statement, outofline, type, name, num, unbolded ) {
    let displayed_num = num != -1 ? <> {num}</> : <></>
    let displayed_name = name ? <>({name})</> : <></>
    let title_style = unbolded ?  'italic text-elevated underline underline-offset-2' : 'italic text-italic font-bold underline underline-offset-2'
    let title = (
        <div className='inline-flex flex-wrap gap-1 text-left'>
            <span className={title_style}>{type}{displayed_num}.</span>
            <span className='text-elevated font-bold'>{displayed_name}</span>
        </div>
    )
    if(outofline) return (
        <>
            {title}
            <div className="space-y-2 sm:pl-4">
                {statement}
            </div>
        </>
    )

    let first_child = statement
    let other_children = []
    if(statement.constructor === Array) {
        first_child = statement[0]
        other_children = statement.slice(1)
    }
    return (
        <div className="sm:space-y-1">
            <div className='space-y-1 sm:space-y-0 sm:flex sm:space-x-2'>
                <div>
                    {title}
                </div>
                <div>
                    {first_child}
                </div>
            </div>
            <div className="sm:pl-4">
                {other_children ? other_children : <></>}
            </div>
        </div>
    )
}

function render_thm(children, outofline, type, name, num) {
    let statement = children
    let proof = null
    if(children.constructor===Array && children[children.length-1].type.name === 'Proof') {
        statement = children.slice(0,-1)
        proof = children[children.length-1]
    }
    return (
        <>
            {render_statement(statement, outofline, type, name, num)}
            {proof ? (outofline ? <div className="mt-2">{proof}</div> : proof) : <></>}
        </>
    )
}

function quote(react, unquoted, lines=false) {
    if(unquoted) {
        if(lines) return <><hr/>{react}<hr/></>
        else return react
    }
    return (<blockquote>{react}</blockquote>)
}

export function Proof({ children, outofline=false, type='Proof', name='', unquoted=false, unbolded=false }) {
    return quote(render_statement(children, outofline, type, name, -1, unbolded), unquoted)
}
export function Thm({ children, outofline=false, type='Theorem', name='', unquoted=false, num=-1 }) {
    return quote(render_thm(children, outofline, type, name, num), unquoted, true, false) // if unquoted, then add lines instead
}
export function Lemma({ children, outofline=false, name='', unquoted=false, num=-1 }) {
    return quote(render_thm(children, outofline, 'Lemma', name, num), unquoted, false, false) // don't add lines
}
export function Prop({ children, outofline=false, name='', unquoted=false, num=-1 }) {
    return quote(render_thm(children, outofline, 'Prop', name, num), unquoted, false, false) // don't add lines
}
export function Defn({ children, outofline=false, name='', quoted=false}) {
    return quote(render_statement(children, outofline, 'Defn', name, -1), !quoted, false, false) // don't add lines
}
export function Example({ children, outofline=false, name='', quoted=false, plural=false }) {
    return quote(render_statement(children, outofline||plural, plural ? 'Examples' : 'Example', name, -1), !quoted, false, false) // don't add lines
}