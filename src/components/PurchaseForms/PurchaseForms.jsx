import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./purchaseForms_styles";
import TitleBar from "./TitleBar";
import Forms from "./Forms";

function PurchaseForms() {
  //   const classes = useStyles();
  return (
    <div>
      <Grid container>
        <TitleBar />
        <Forms />
      </Grid>
    </div>
  );
}

export default PurchaseForms;
