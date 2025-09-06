import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/NotFound';
import Booking from "../pages/booking/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [ 
            {index: true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'booking', element: <Booking/>},
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    },
]);

export default router;