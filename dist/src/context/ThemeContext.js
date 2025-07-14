'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);
    const [isManual, setIsManual] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const hour = new Date().getHours();
        const isNight = hour >= 18 || hour < 6;
        let resolvedTheme;
        if (saved === 'light' || saved === 'dark') {
            resolvedTheme = saved;
            setIsManual(true);
        }
        else if (prefersDark) {
            resolvedTheme = 'dark';
        }
        else if (isNight) {
            resolvedTheme = 'dark';
        }
        else {
            resolvedTheme = 'light';
        }
        setTheme(resolvedTheme);
        setMounted(true);
    }, []);
    useEffect(() => {
        if (!mounted)
            return;
        document.documentElement.classList.toggle('dark', theme === 'dark');
        if (isManual) {
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted, isManual]);
    useEffect(() => {
        if (!mounted || isManual)
            return;
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const isNight = hour >= 18 || hour < 6;
            setTheme(prev => {
                if (isNight && prev !== 'dark')
                    return 'dark';
                if (!isNight && prev !== 'light')
                    return 'light';
                return prev;
            });
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, [mounted, isManual]);
    const toggleTheme = () => {
        setIsManual(true);
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };
    useEffect(() => {
        if (!mounted)
            return;
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.add('theme-loaded');
        if (isManual) {
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted, isManual]);
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: mounted ? children : null }));
};
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
export { useTheme, ThemeProvider };
