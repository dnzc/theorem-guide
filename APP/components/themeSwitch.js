import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { themes } from '@/components/myThemeProvider';
import { GrPaint } from "react-icons/gr";
import Head from 'next/head';

export default function ThemeSwitch() {
const [mounted, setMounted] = useState(false);
const { theme, resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the current theme
  useEffect(() => setMounted(true), []);

  let themeColour = '#0f0f0f'

  console.log(resolvedTheme)
  switch (resolvedTheme) {
    case 'light':
    case 'sanctum':
      themeColour = '#ffffff'
      break
    case 'dark':
    case 'catppuccin':
      themeColour = '#1e1e2e'
      break
    case 'gruvbox':
      themeColour = '#282828'
      break
  }

  if (!mounted) return
      <Head>
        <meta name="theme-color" content={themeColour}/>
      </Head>

  let systemTheme = <>
    <span className='inline-block dark:hidden'>(sanctum)</span>
    <span className='hidden dark:inline-block'>(catppuccin)</span>
  </>

  return (
    <>
      <Head>
        <meta name="theme-color" content={themeColour}/>
      </Head>

      <div className='mt-15 bg-Themeselect-topbar rounded-t-lg pl-4 pr-24 py-4 w-full text-lg outline-none'>
        <p className='hidden sm:block'>
          Current theme: <span className='whitespace-nowrap font-bold text-Themeselect-selected'>{mounted && theme!=='system' && theme}{theme==='system' && <>system theme <span className='text-text-secondary font-normal'>{systemTheme}</span></>}</span>
        </p>
        <div className='block sm:hidden indent-[-9999px]'>|</div> {/* hack to make height not shrink */}
      </div>
      <ol>
        {themes.map((t) => {
          if (t === 'light' || t === 'dark') return
          return (
            <li key={t}>
              <button onClick={() => { setTheme(t) }} className={`w-full h-full p-4 flex items-start space-x-2 font-bold ${t === theme ? 'bg-Themeselect-selected text-Themeselect-text-selected' : '[@media(hover:hover)]:hover:bg-Themeselect-hover'}`}>
                <GrPaint size={20} className={`shrink-0 relative top-[0.1rem] ${t!==theme && 'text-text-secondary'}`}/>
                <p className='flex-1 text-left'>{t==='system' ? <>system theme <span className={t===theme ? 'text-Themeselect-text-selected font-normal' : 'text-text-secondary font-normal'}>{systemTheme}</span></> : t}</p>
              </button>
            </li>
          )
        })}
      </ol>
    </>
  );
}