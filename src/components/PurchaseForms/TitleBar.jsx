import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./purchaseForms_styles";

function TitleBar() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item sm={12} className={classes.titleBar}>
        Account
      </Grid>
    </Fragment>
  );
}

export default TitleBar;
