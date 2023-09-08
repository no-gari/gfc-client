import type { Preview } from '@storybook/react';

// import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css } from '@emotion/react'

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */

const GlobalStyles = css`
  body {
    font-family: Pretendard sans-serif;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  //
  // decorators: [
  //   // Adds global styles and theme switching support.
  //   withThemeFromJSXProvider({
  //     /* Uncomment for theme switching support */
  //     // themes: {
  //     //   light: lightTheme,
  //     //   dark: darkTheme,
  //     // }
  //     // defaultTheme: 'light',
  //     // Provider: ThemeProvider,
  //     GlobalStyles,
  //   }),
  // ],
};

export default preview;
