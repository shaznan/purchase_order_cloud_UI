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
    fontWeight: 500,
    verticalAlign: "middle",
    lineHeight: "1.5rem",
  },
  groupItem: {
    paddingBottom: "1.5rem",
    "& .dx-form-group-caption": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
      fontWeight: "bold",
      fontSize: "1rem",
      padding: "0.3rem",
      paddingLeft: "1rem",
      display: "block",
    },
  },
}));

export { useStyles };
