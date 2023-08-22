import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Main() {
    return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
          <ResponsiveAppBar/>
          <Grid container >
           <Outlet />
          </Grid>
        </div>
    </ThemeProvider>
        
      );
}

export default Main;