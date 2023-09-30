import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from '../components/footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
