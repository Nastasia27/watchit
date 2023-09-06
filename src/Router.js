import {createBrowserRouter} from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Films from './pages/Films';
import NotFaund from './pages/NotFaund';
import FilmDetails from './pages/FilmDetails';
import Auth from './layouts/Auth';
import Register from './pages/Auth/Register';
import Actor from './pages/Actor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <NotFaund/>,
    children: [
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/films',
        element: <Films/>
      },
      {
        path: '/films/:filmId',
        element: <FilmDetails/>
      },
      {
        path: '/films/:filmId/actor/:Id',
        element: <Actor/>
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



