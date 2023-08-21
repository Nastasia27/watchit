import {createBrowserRouter} from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Films from './pages/Films';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/films',
        element: <Films/>
      },
    ]
  }
])

export default router;



