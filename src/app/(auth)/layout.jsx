import React from 'react';
import Navbar from '../components/shared/Navbar';
import { quickSand } from '../layout';
import Footer from '../components/shared/Footer';

const AuthLayout = ({children}) => {
    return (
        <div className={`${quickSand.className}`}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default AuthLayout;