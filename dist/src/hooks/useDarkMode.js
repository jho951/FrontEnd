import { useEffect, useState } from 'react';
function useDarkMode() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = saved || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    return { theme, toggleTheme: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) };
}
export { useDarkMode };
