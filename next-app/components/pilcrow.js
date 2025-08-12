"use client"

import { ImPilcrow } from "react-icons/im"
import Link from "next/link"
import { copyToClipboard } from "./copyButton"

export default function Pilcrow({ href, text }) {
    return (
        <Link href={href} onClick={() => copyToClipboard(text, true)} className="hidden group-hover:block text-linkanchor"><ImPilcrow size={20}/></Link>
    )
}