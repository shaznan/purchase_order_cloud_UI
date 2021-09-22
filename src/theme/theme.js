import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#eeeeee",
    },
    background: {
      main: "#fafafa",
      secondary: "#fafafa",
    },
    error: {
      main: "#f44336",
    },
  },
});

export default theme;
