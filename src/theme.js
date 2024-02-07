import { createTheme } from "@mui/material";
const colors = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  green: {
    100: "#00DFC0",
    200: "#01DABC",
    300: "#01D4B7",
    400: "#01CFB2",
    500: "#01C9AD",
    600: "#01C4A8",
    700: "#3bb9a2",
    800: "#01B99E",
    900: "#01B399",
  },
  blue :{
    100: "#e0f4f0",
    200: "#3a457e",
    300: "#1D2865",
    400: "#1C2762",
    500: "#1F2B6C",
    600: "#19245B",
    700: "#182257",
    800: "#172054",
    900: "#151E50",
  },
  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#98a0bb",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[500],
      dark: colors.primary[400],
      light : colors.white[700]
    },
    secondary: {
      dark: colors.green[900],
      main: colors.green[700],
      light: colors.green[400],
      extraLight: colors.green[200],
    },
    blue: {
      dark: colors.blue[700],
      main: colors.blue[500],
      light: colors.blue[200],
      extraLight: colors.blue[100],
    },
    background: {
      default: colors.white[500],
      dark : colors.white[600],
    },
  },
});
