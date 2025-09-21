type Theme = 'light' | 'dark'

// Check localStorage for saved theme or use system preference
const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light'
    
    const saved = localStorage.getItem('theme') as Theme
    if (saved === 'light' || saved === 'dark') return saved
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    
    return 'light'
}

const applyTheme = (theme: Theme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme)
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark')
        }
    }
}

function createThemeStore() {
    let theme = $state<Theme>(getInitialTheme())
    
    return {
        get current() {
            return theme
        },
        setTheme: (newTheme: Theme) => {
            theme = newTheme
            applyTheme(newTheme)
        },
        toggleTheme: () => {
            const newTheme = theme === 'light' ? 'dark' : 'light'
            theme = newTheme
            applyTheme(newTheme)
        },
        initTheme: () => {
            const initialTheme = getInitialTheme()
            theme = initialTheme
            applyTheme(initialTheme)
        }
    }
}

export const themeStore = createThemeStore()