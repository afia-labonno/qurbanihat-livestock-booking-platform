
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-8 py-6">
                <div className="navbar-start">

                    {/*dropdown for small screen  */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/animals'}>All Animals</Link></li>
                        </ul>
                    </div>
                    
                    {/* navbar-start */}
                    <div className='flex gap-2 justify-items-center'>
                        <Image 
                            src={logo} 
                            width={50} 
                            height={50} 
                            alt='logo' 
                            className='rounded-full w-8 lg:w-full'
                        />
                        <h2 className='text-2xl lg:text-4xl font-bold text-amber-950'>QurbaniHat</h2>
                    </div>
                </div>

                {/* navbar-center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-amber-700 text-lg font-semibold">
                        <li><Navlink href={'/'}>Home</Navlink></li>
                        <li><Navlink href={'/animals'}>All Animals</Navlink></li>
                        <li><Navlink href={'/about'}>About</Navlink></li>
                    </ul>
                </div>

                {/* navbar - end */}
                <div className="navbar-end">
                    <button className='btn bg-amber-950 text-white text-sm lg:font-semibold lg:text-lg'>
                        <Link href={'/signin'}>
                            Signin
                        </Link>
                    </button>  
                </div>

            </div>

        </div>
    );
};

export default Navbar;