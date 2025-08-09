import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [ 
            {index: true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'contact', element: <Contact/>},
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    },
]);

export default router;