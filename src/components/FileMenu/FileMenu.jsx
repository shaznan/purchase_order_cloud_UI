import React from "react";
import MenuItems from "./MenuItems";
import MenuTitle from "./MenuTitle";
import { Grid } from "@material-ui/core";

function FileMenu() {
  return (
    <Grid container spacing={10}>
      {/* When resizing remove texts and only keep icons */}
      <Grid item sm={12} md={10}>
        <MenuItems />
      </Grid>
      <Grid item sm={12} md={2}>
        <MenuTitle />
      </Grid>
    </Grid>
  );
}

export default FileMenu;
