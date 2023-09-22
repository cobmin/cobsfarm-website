import React, { ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
