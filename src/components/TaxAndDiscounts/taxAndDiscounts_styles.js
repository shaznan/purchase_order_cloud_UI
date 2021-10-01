import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  groupItem: {
    paddingBottom: "0",
    padding: 0,
    marginTop: "0.5rem",
    fontSize: "0rem !important",
    "& .dx-form-group-caption": {
      fontSize: "0.9rem",
    },
    "& .dx-list-item": {
      borderTop: "none",
    },
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
  button_container: {
    marginTop: "1rem",
  },
  services_btn: {
    backgroundColor: "#DBDBDB !important",
    fontSize: "0.8rem !important",
    border: "0.3px solid grey !important",
  },
}));

export { useStyles };
