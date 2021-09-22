import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    color: "black",
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
    textDecoration: "none",
    padding: "0.5rem",
  },
  navitem: {
    listStyleType: "none",
    // fontWeight: "bold",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  active: {
    fontWeight: "bold",
    // color: theme.palette.primary.main,
  },
  dollarIcon: {
    color: "#5FDB00",
  },
}));

export { useStyles };
