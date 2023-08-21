import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router";

function Main() {
    return (
        <div className="App">
          <ResponsiveAppBar/>
          <Grid container>
           <Outlet/>
          </Grid>
        </div>
      );
}

export default Main;