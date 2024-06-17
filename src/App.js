import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import SignIn from './login_page/SignIn';
import HomePage from './homepage/HomePage';

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <SignIn />,
    },
    {
      path: '/home',
      element: <HomePage />,
    }
  ]
);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <div id="root"></div>
      </div>
    </RouterProvider>
  );
}

export default App;
