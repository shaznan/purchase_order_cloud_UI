import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  filemenu: {
    display: "flex",
    padding: "0.5rem", //comment this out, if you want the menu to shrink
    margin: "0",
  },
  filemenu_item: {
    listStyleType: "none",
    margin: "0.3rem 0.5rem 0.3rem 0.5rem",
    display: "flex",
    fontSize: "0.9rem",
    padding: "0.2rem",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      backgroundColor: "#F1f1f1",
    },
  },
  filemenue_icons: {
    fontSize: "large",
    alignItems: "center",
    marginRight: "0.3rem",
  },
  closebtn: {
    color: "#c23727",
  },
  saveBtn: {
    color: "#357c95",
  },
  discardBtn: {
    color: "#748938",
  },
  openBtn: {
    color: "#f4b127",
  },
  deleteBtn: {
    color: "#c23727",
  },
  printBtn: {
    color: "grey",
  },
  defaultBtn: {
    color: "#e3ad16",
  },
}));
export { useStyles };
