import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white selection:bg-slate-900 selection:text-white flex flex-col">
            <Banner />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
