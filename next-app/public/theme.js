try {
    var theme = localStorage.getItem('theme')
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    var existing = document.querySelectorAll('meta[name="theme-color"]')
    
    // Update existing meta tag if it exists
    if (existing.length > 0) {
        // Remove all but the first one to clean up duplicates
        for (var i = 1; i < existing.length; i++) {
            existing[i].remove();
        }
        
        var meta = existing[0]
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
    }
} catch (_) { }