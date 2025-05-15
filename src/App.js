import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Root from './Components/Root';
import Users,{ loader as usersLoader }  from './Components/Users';

const router = createBrowserRouter([
  {
    path : '/', id: 'root', element : <Root/>,
    children: [
      { index: true, element: <Home />},
      { path: 'users', element: <Users />, loader : usersLoader},
      { path: 'login', element: <Login />},
      { path: 'signup', element: <Signup /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
