import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a new context for theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
    // Initialize theme state from localStorage or default to light
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    // Effect to apply theme changes to the DOM
    useEffect(() => {
        // Apply appropriate classes and save to localStorage
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    // Values to provide to consumers
    const value = {
        isDarkTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
