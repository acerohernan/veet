import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import LoadingPage from "./pages/loading";

import { store } from "./store";
import { theme } from "./theme";
import { router } from "./router";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
