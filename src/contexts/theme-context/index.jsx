import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const handleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [])

    return (
        <ThemeContext.Provider value={handleTheme}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}