"use client";

import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/app/utils/theme';

const ThemeRegistry = ({children,}: {children: React.ReactNode;}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRegistry;