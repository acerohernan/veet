import { Button, CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>Hello world</main>
      <Button variant="contained">Works</Button>
    </ThemeProvider>
  );
}

export default App;
