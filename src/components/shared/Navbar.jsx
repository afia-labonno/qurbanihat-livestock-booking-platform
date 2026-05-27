'use client'
import Image from 'next/image';
import userImg from '@/assets/user.webp'
import logo from '@/assets/logo.png'
import Link from 'next/link';
import React, { use } from 'react';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    console.log(session);
    const user = session?.user;
    console.log(user);

    return (

        <div className="navbar bg-base-100 shadow-sm sm:px-6 lg:px-8 py-4">
            <div className="navbar-start">

                {/*dropdown for small screen  */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-amber-800">
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
                        className='rounded-full w-10 h-10 sm:h-12 sm:w-12'
                    />
                    <h2 className='text-xl sm:text-2xl lg:text-4xl font-bold bg-linear-to-r from-amber-950 to-amber-800 bg-clip-text text-transparent'>QurbaniHat</h2>
                </div>
            </div>

            {/* navbar-center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-amber-700 text-lg font-semibold">
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/animals'}>All Animals</Navlink></li>
                    {/* <li><Navlink href={'#about'} className="">About</Navlink></li> */}
                </ul>
            </div>

            {/* navbar - end */}
            <div className="navbar-end">

                {isPending ? (
                    <span className='loading loading-spinner text-info'></span>
                ) : (

                    <div className='flex gap-2 items-center'>
                        {
                            user && (
                                <div className='hidden sm:flex items-center'>
                                    <span className='text-sm text-gray-600'>
                                        Hi! {user?.name}
                                    </span>
                                </div>
                            )
                        }
                        <div className="dropdown dropdown-end ">

                            {/* profile image button */}
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full border border-amber-800">
                                    <Image
                                        src={user?.image || userImg}
                                        width={40}
                                        height={40}
                                        alt="profile"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>

                            {/* dropdown content */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-base-100 rounded-box w-64"
                            >

                                {user ? (
                                    <>
                                        {/* user info */}
                                        <div className="flex flex-col items-center gap-2 mb-3">
                                            <Image
                                                src={user?.image || userImg}
                                                width={80}
                                                height={80}
                                                alt="user"
                                                className="rounded-full"
                                            />

                                            <h2 className="font-bold text-lg">
                                                {user?.name}
                                            </h2>

                                            <p className="text-sm text-gray-500">
                                                {user?.email}
                                            </p>
                                        </div>

                                        <li className='w-full flex justify-center'>
                                            <Link
                                                href={'/update-profile'}
                                                className='btn btn-ghost w-full text-center'
                                            >
                                                Update Profile
                                            </Link>
                                        </li>

                                        <div className='divider'></div>

                                        <li className='w-full'>
                                            <button
                                                onClick={async () => await authClient.signOut()}
                                                className="text-amber-800 font-semibold text-xl btn btn-ghost w-full"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <Link href="/signin" className='text-amber-800 font-semibold text-xl btn btn-ghost w-full' >
                                            Login
                                        </Link>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>

                )}
            </div>

        </div>


    );
};

export default Navbar;