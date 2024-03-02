import { createTheme } from "@mui/material/styles";

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    active: true;
    on: true;
    off: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1a73e8",
    },
  },
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { color: "on", size: "medium" },
          style: {
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            "&:hover": { backgroundColor: "#9A9A9C" },
          },
        },
        {
          props: { color: "off", size: "medium" },
          style: {
            border: "1px solid #ea4335",
            backgroundColor: "#ea4335",
            color: "white",
            "&:hover": { backgroundColor: "#C93C33" },
          },
        },
        {
          props: { color: "on", size: "small" },
          style: {
            backgroundColor: "#3c4043",
            border: "none",
            padding: "10px",
            borderRadius: "100%",
            color: "white",
            "&:hover": { backgroundColor: "#434649" },
          },
        },
        {
          props: { color: "off", size: "small" },
          style: {
            border: "none",
            padding: "10px",
            borderRadius: "100%",
            backgroundColor: "#ea4335",
            color: "white",
            "&:hover": { backgroundColor: "#C93C33" },
          },
        },
        {
          props: { color: "active" },
          style: {
            border: "none",
            padding: "10px",
            borderRadius: "100%",
            backgroundColor: "#8AB4F8",
            color: "black",
            "&:hover": { backgroundColor: "#abc9fc" },
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 700,
      lg: 960,
      xl: 1280,
    },
  },
});
