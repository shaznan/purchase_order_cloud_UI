import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.secondary,
    maxHeight: "100vh",
    overflowX: "hidden",
    // backgroundColor: "red",
  },
}));

export { useStyles };
