import React from 'react';
import { quickSand } from '../../layout';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';


const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default HomeLayout;