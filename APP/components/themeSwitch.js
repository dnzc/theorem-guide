import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { themes } from '@/components/myThemeProvider';
import { GrPaint } from "react-icons/gr";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  let systemTheme = <>
    <span className='inline-block dark:hidden'>(sanctum)</span>
    <span className='hidden dark:inline-block'>(catppuccin)</span>
  </>

  return (
    <>
      <div className='mt-15 bg-Themeselect-topbar rounded-t-lg pl-4 pr-24 py-4 w-full text-lg outline-none'>
        <p className='hidden sm:block'>
          Current theme: <span className='whitespace-nowrap font-bold text-Themeselect-selected'>{mounted && theme!=='system' && theme}{theme==='system' && <>system theme <span className='text-text-secondary font-normal'>{systemTheme}</span></>}</span>
        </p>
        <div className='black sm:hidden indent-[-9999px]'>|</div> {/* hack to make height not shrink */}
      </div>
      <ol>
        {themes.map((t) => {
          if (t === 'light' || t === 'dark') return
          return (
            <li key={t}>
              <button onClick={() => { setTheme(t) }} className={`w-full h-full p-4 flex items-start space-x-2 font-bold ${t === theme ? 'bg-Themeselect-selected text-Themeselect-text-selected' : '[@media(hover:hover)]:hover:bg-Themeselect-hover'}`}>
                <GrPaint size={20} className={`relative top-[0.1rem] ${t!==theme && 'text-text-secondary'}`}/>
                <p>{t==='system' ? <>system theme <span className={t===theme ? 'text-Themeselect-text-selected font-normal' : 'text-text-secondary font-normal'}>{systemTheme}</span></> : t}</p>
              </button>
            </li>
          )
        })}
      </ol>
    </>
  );
}