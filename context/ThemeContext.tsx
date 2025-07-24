'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { resolveInitialTheme } from '@/libs/theme/theme';

import { Theme, ThemeContextProps } from '@/types';

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [isManual, setIsManual] = useState(false);

  // 초기 테마 설정
  useEffect(() => {
    const { theme: initialTheme, isManual } = resolveInitialTheme();
    setTheme(initialTheme);
    setIsManual(isManual);
    setMounted(true);
  }, []);

  // 테마 적용 및 저장
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.add('theme-loaded');
    if (isManual) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted, isManual]);

  // 자동 테마 변경
  useEffect(() => {
    const { theme: initialTheme, isManual } = resolveInitialTheme();
    setTheme(initialTheme);
    setIsManual(isManual);
    setMounted(true);
  }, []);

  // 테마 토글
  const toggleTheme = () => {
    setIsManual(true);
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export { useTheme, ThemeProvider };
