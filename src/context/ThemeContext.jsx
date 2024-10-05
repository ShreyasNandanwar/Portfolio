import React from 'react'
import { createContext, useState } from 'react'


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const bodyElement = document.body;

        bodyElement.classList.toggle('dark', !isDarkMode);
        setIsDarkMode(!isDarkMode);
    }
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

