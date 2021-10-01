import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    borderTop: "0.5px solid rgba(0,0,0, 0.2)",
    width: "100rem",
    maxHeight: "2rem",
  },
  icon: { marginRight: "0.5rem" },
  label: {
    fontSize: "0.8rem",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "0.3rem",
    marginRight: "0.3rem",
    // padding: "0.2rem",
  },
}));

export { useStyles };
