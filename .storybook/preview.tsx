import { MantineProvider } from '@mantine/core';
import { useDarkMode } from 'storybook-dark-mode';
import "../src/styles/globals.css";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
      withGlobalStyles
      withNormalizeCSS
    >
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
};
