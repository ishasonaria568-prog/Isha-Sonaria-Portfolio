import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ColorMode;
  toggleMode: () => void;
  setMode: (m: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleMode: () => {},
  setMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ColorMode>('light');

  useEffect(() => {
    const saved = localStorage.getItem('pw_theme_mode') as ColorMode;
    if (saved === 'dark' || saved === 'light') {
      setModeState(saved);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to light mode, matching pw.is
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setMode = (newMode: ColorMode) => {
    setModeState(newMode);
    localStorage.setItem('pw_theme_mode', newMode);
    if (newMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
