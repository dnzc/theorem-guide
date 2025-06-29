export default function Badge( {color='red', children} ) {

    switch(color) {
        case 'red': return <span className="badge-red inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'yellow': return <span className="badge-yellow inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'green': return <span className="badge-green inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'blue': return <span className="badge-blue inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'indigo': return <span className="badge-indigo inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'purple': return <span className="badge-purple inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        case 'pink': return <span className="badge-pink inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
        default: return <span className="badge-gray inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset whitespace-nowrap">{children}</span>
    }

}