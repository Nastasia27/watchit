import {createBrowserRouter} from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Films from './pages/Films';
import NotFaund from './pages/NotFaund';
import FilmDetails from './pages/FilmDetails';
import Auth from './layouts/Auth';
import Register from './pages/Auth/Register';
import Actor from './pages/Actor';
import PrivateRoute from './components/ResponsiveAppBar/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <NotFaund/>,
    children: [
      {
        path: '/home',
        element: <PrivateRoute><Home/></PrivateRoute> ,
      },
      {
        path: '/films',
        element: <PrivateRoute><Films/></PrivateRoute>,
      },
      {
        path: '/films/:filmId',
        element: <PrivateRoute><FilmDetails/></PrivateRoute>
      },
      {
        path: '/films/actor/:Id',
        element:<PrivateRoute><Actor/></PrivateRoute> 
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
      // {
      //   path: '/films',
      //   element: <Films/>
      // }
    ]
  }
])

export default router;



