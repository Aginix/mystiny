import React, { useState, useEffect } from 'react';
export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useThemeType(themeId: string): [string, (theme?: string) => void] {
  const [theme, setTheme] = useState(themeId);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme && ['light', 'dark'].includes(theme)) {
      setTheme(theme);
    }
  });

  useEffect(() => {
    if (!window.matchMedia) {
      return () => {};
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const darkListener = (event: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === 'auto') {
        if (event.matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
        setTheme('auto');
      }
    };

    /**
     * Fix for Safari
     */
    if (!mql.addEventListener) {
      mql.addListener(darkListener);
      return () => {
        mql.removeListener(darkListener);
      };
    }

    mql.addEventListener('change', darkListener);
    return () => {
      mql.removeEventListener('change', darkListener);
    };
  });

  function toggleTheme(_theme: string = theme === 'light' ? 'dark' : theme === 'dark' ? 'light' : 'auto') {
    if (_theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (_theme === 'dark') {
      if (!window.matchMedia) {
        setTheme('light');
        localStorage.setItem('theme', 'light');
        setTheme('light');
        return;
      }
      setTheme('auto');
      localStorage.setItem('theme', 'auto');
      setTheme('auto');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }
  return [theme, toggleTheme];
}
