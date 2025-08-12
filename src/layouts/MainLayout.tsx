import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function MainLayout() {
    return (
        <div className='flex flex-col min-h-screen md:px-15'>
            <Navbar/>
            
            <main className='flex-grow'>
                <Outlet /> 
            </main>
        </div>
    );

}