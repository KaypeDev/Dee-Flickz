import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';


export default function MainLayout() {
    return (
        <div className='flex flex-col min-h-screen '>
            <ScrollToTop/>
            <Navbar/>
            
            <main className='flex-grow'>
                <Outlet /> 
            </main>

            <Footer/>
        </div>
    );

}