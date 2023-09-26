import {createBrowserRouter} from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Films from './pages/Films';
import NotFaund from './pages/NotFaund';
import FilmDetails from './pages/FilmDetails';
import Auth from './layouts/Auth';
import Register from './pages/Auth/Register';
import Actor from './pages/Actor';

import LogIn from './pages/Auth/LogIn'
import PrivateRoute from './components/ResponsiveAppBar/PrivateRoute/PrivateRoute';

import MainSwiper from '../src/pages/FilmDetailscomponents/Slider/MainSlider';
import FilmByGenre from './pages/FilmsByGenre';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <NotFaund/>,
    children: [
      {
        path: '/home',
        element: <Home/> ,
      },
      {
        path: '/films',
        element: <PrivateRoute><Films/></PrivateRoute>,
      },
      {
        path: '/films/:filmId',
        element: <PrivateRoute><FilmDetails/></PrivateRoute>,
      },
      {
        path: '/films/actor/:Id',
        element:<PrivateRoute><Actor/></PrivateRoute>,
      },
      {
        path: '',
        element: <MainSwiper/>,
      },
      {  path: '/films/Genre/:Genres',
        element: <PrivateRoute><FilmByGenre/></PrivateRoute>
      }
    ]
  },
  {
    path: 'auth/',
    element: <Auth/>,
    errorElement: <NotFaund/>,
    children: [
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'login',
        element: <LogIn/>
      }
    ]
  }
])

export default router;



