import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../pages/FilmDetailscomponents/Footer";


function Main() {
    return (
      <div className="App" style={{position:'relative'}}>
          <ResponsiveAppBar/>
          <Grid container sx={{minHeight:"100vh"}}>
           <Outlet/>
          </Grid>
          <Footer />
        </div>
    
        
      );
}

export default Main;