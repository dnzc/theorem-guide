export default function Badge( {color='red', children} ) {

    switch(color) {
        case 'red': return <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-700 ring-1 ring-red-600/10 ring-inset whitespace-nowrap">{children}</span>
        case 'yellow': return <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-bold text-yellow-800 ring-1 ring-yellow-600/20 ring-inset whitespace-nowrap">{children}</span>
        case 'green': return <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-green-600/20 ring-inset whitespace-nowrap">{children}</span>
        case 'blue': return <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-700/10 ring-inset whitespace-nowrap">{children}</span>
        case 'indigo': return <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-700/10 ring-inset whitespace-nowrap">{children}</span>
        case 'purple': return <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-bold text-purple-700 ring-1 ring-purple-700/10 ring-inset whitespace-nowrap">{children}</span>
        case 'pink': return <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-bold text-pink-700 ring-1 ring-pink-700/10 ring-inset whitespace-nowrap">{children}</span>
        default: return <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-gray-500/10 ring-inset whitespace-nowrap">{children}</span>
    }

}