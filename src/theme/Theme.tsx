import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  palette: {
    primary: {
      light: "#3851AC",
      main: "#1B3670",
      dark: "#9AA2A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bcceb2",
      main: "#1B3670",
      dark: "#79d74b",
      contrastText: "#000",
    },
  },
};

const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
