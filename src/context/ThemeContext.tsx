'use client';

import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;

    let resolvedTheme: Theme;

    if (saved === 'light' || saved === 'dark') {
      resolvedTheme = saved;
      setIsManual(true);
    } else if (prefersDark) {
      resolvedTheme = 'dark';
    } else if (isNight) {
      resolvedTheme = 'dark';
    } else {
      resolvedTheme = 'light';
    }

    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  // 클래스 적용
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    if (isManual) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted, isManual]);

  useEffect(() => {
    if (!mounted || isManual) return;

    const interval = setInterval(() => {
      const hour = new Date().getHours();
      const isNight = hour >= 18 || hour < 6;

      setTheme(prev => {
        if (isNight && prev !== 'dark') return 'dark';
        if (!isNight && prev !== 'light') return 'light';
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
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.add('theme-loaded');
    if (isManual) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted, isManual]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
