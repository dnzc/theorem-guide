try {
    var theme = localStorage.getItem('theme')
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    var existing = document.querySelectorAll('meta[name="theme-color"]')
    existing.forEach(function (m) { m.remove(); })

    var meta = document.createElement('meta')
    meta.name = 'theme-color'
    switch (theme) {
        case 'system':
            if (systemDark) meta.content = '#1e1e2e' // catppuccin
            else meta.content = '#dddddd' // sanctum
            break
        case 'sanctum':
            meta.content = '#dddddd'
            break
        case 'catppuccin':
            meta.content = '#1e1e2e'
            break
        case 'gruvbox':
            meta.content = '#282828'
            break
        default:
            // If no theme is set, use system preference
            if (systemDark) meta.content = '#1e1e2e'
            else meta.content = '#dddddd'
            break
    }
    document.head.appendChild(meta)
} catch (_) { }