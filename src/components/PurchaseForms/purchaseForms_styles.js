import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
    padding: "0.3rem",
    paddingLeft: "1rem",
  },

  item: {
    color: "red !important",
    height: "0rem",
    marginBottom: "1.2rem",
    fontSize: "0.7rem",
    // color: "black",
    fontWeight: 500,
    // padding: "1rem",
  },
  groupItem: {
    // backgroundColor: "red",
    paddingBottom: "1.5rem",
  },
}));

export { useStyles };
