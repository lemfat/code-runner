"use client"

import "@/styles/globals.css";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useEffect } from "react";
import 'zenn-content-css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <html>
      <head />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <body>{children}</body>
        </MantineProvider>
      </ColorSchemeProvider>
    </html>
  )
}
