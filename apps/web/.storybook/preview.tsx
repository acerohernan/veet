import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { theme } from "../src/theme";
import { store } from "../src/store";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
  (Story) => (
    <Provider store={store}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </Provider>
  ),
];

export default preview;
