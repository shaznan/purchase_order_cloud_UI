import React from "react";
import { useStyles } from "./Navbar_styles";
import { Grid } from "@mui/material";

function Navbar() {
  const classes = useStyles();
  return (
    <ui className={classes.navbar}>
      <li className={`${classes.active} ${classes.navitem}`}>File</li>
      <li className={classes.navitem}>Print</li>
      <li className={classes.navitem}>
        <span className={classes.dollarIcon}>$</span> Edit Exchange Rate
      </li>
    </ui>
  );
}

export default Navbar;
