import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";
import Navbar from "./components/Navbar/Navbar";
import { useStyles } from "./App_styles";
import { Grid } from "@mui/material";
import FileMenu from "./components/FileMenu/FileMenu";
import PurchaseForms from "./components/PurchaseForms/PurchaseForms";
// import "devextreme/dist/css/dx.light.compact.css";
import DataGrid from "./components/DataGrid/DataGrid.component";
import TaxAndDiscounts from "./components/TaxAndDiscounts/TaxAndDiscounts";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item sm={12}>
          <Navbar />
        </Grid>
        <Grid item sm={12}>
          <FileMenu />
        </Grid>
        <Grid item sm={12}>
          <PurchaseForms />
        </Grid>
        <Grid item sm={12}>
          <DataGrid />
        </Grid>
        <Grid item sm={12}>
          <TaxAndDiscounts />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
