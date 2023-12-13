import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import ProtectedLayout from './components/ProtectedLayout';
import GuestLayout from './components/GuestLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
        errorElement: <ErrorPage />,
		children: [
            { path: "/", element: <Login /> },
            { path: "about", element: <About /> },
			
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
]);

export default router;
