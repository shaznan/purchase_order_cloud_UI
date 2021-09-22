import Navbar from "./components/Navbar/Navbar";
import { useStyles } from "./App_styles";
import { Grid } from "@mui/material";
import FileMenu from "./components/FileMenu/FileMenu";

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
      </Grid>
    </div>
  );
}

export default App;
