import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './Router';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store/store';
import { Provider } from 'react-redux';
import './firebase';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components:{
    MuiTab: {
      styleOverrides:{
        textColorSecondary:{
          color:"red"
        },
        root:{
          '&.Mui-selected': {
            color:'red',
            borderBottom: '2px solid red'
          }
        }
      }
    },
    MuiTabsIndicator: {
      styleOverrides: {
        root: {
              backgroundColor: 'red',
              color: 'red',
              borderBottom: 'red'
            },
        }
      },
    },
  },
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
     <CssBaseline />
    <React.StrictMode>
       <Provider store={store}>
         <RouterProvider router={router}/>
       </Provider>
    </React.StrictMode>
  </ThemeProvider>
);


reportWebVitals();
