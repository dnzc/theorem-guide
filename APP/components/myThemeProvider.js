'use client'

import { ThemeProvider } from 'next-themes'

// light & dark should not be shown to user
// (they are to be overriden by other themes, so that system can auto select)
// when adding new theme, modify globals.css file including "BEGIN THEME-SPECIFIC STUFF" section
// if want to change default system themes, remember to modify systemTheme in themeSwitch.js
export const themes = [
    'system', // special
    'sanctum', 'catppuccin', 'gruvbox',
    'light', 'dark', // special
]

export function MyThemeProvider({ children }) {
    return <ThemeProvider
        attribute='class'
        themes={themes}
        defaultTheme='system'
        >
            {children}
        </ThemeProvider>
}