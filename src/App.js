import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Login/LoginPage';

function App() {
  const router = createBrowserRouter([ 
    {path: '/', element: <HomePage/>},
    {path: '/register', element: <RegistrationPage/>},
    {path: '/login', element: <LoginPage/>}
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App; 
