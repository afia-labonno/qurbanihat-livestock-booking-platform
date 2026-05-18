'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import React, { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { SiWhatsapp } from 'react-icons/si';
import { SlLocationPin } from 'react-icons/sl';

const Footer = () => {

    const [isExpand, setIsExpand] = useState(false)

    const aboutUs = `QurbaniHat is a modern digital livestock marketplace designed to make Qurbani animal booking simple, trusted, and convenient. Our platform helps users explore quality cows and goats with detailed information including breed, weight, age, and pricing — all in one place.
    We aim to connect buyers with healthy and well-maintained livestock while providing a smooth and user-friendly booking experience. From browsing animals to secure authentication and easy booking, QurbaniHat brings tradition and technology together for a better Qurbani experience.`

    const sliceIndex = aboutUs.indexOf('pricing');

    const shortText = aboutUs.slice(0, sliceIndex);


    return (
        <footer>
            <div className=' bg-amber-950  w-full space-y-3 px-20 lg:px-0'>

                <div className='container mx-auto gap-10 pt-20 my-8 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8'>

                    {/* footer left */}
                    <div className="mx-4 col-span-2 py-4 space-y-4">
                        <div className='flex gap-2 justify-center items-center '>
                            <Image
                                src={logo}
                                width={50}
                                height={50}
                                alt='logo'
                                className='rounded-full'
                            />
                            <h2 className='text-white text-3xl lg:text-4xl font-bold'>QurbaniHat</h2>
                        </div>
                        <div>
                            <p className=' text-center lg:text-start text-gray-300 text-sm px-3 ml-4'>Trusted digital platform for safe, transparent, and hassle-free Qurbani animal trading across Bangladesh.</p>
                        </div>
                    </div>

                    {/* about section */}
                    <div className='text-white space-y-4 px-4 col-span-3'>
                        <h2 id="about" className='text-xl lg:text-2xl font-bold text-center lg:text-start'>Aobut Us</h2>
                        <p className='text-sm lg:text-lg text-gray-300'>
                            {
                                isExpand ? aboutUs : `${shortText}...`
                            }
                            <button onClick={() => setIsExpand(!isExpand)} className='ml-1 text-cyan-200 font-bold'>
                                {
                                    isExpand ? 'Show less' : 'Read more'
                                }
                            </button>
                        </p>
                    </div>

 
                    <div className=' space-y-8 col-span-3'>
                        {/* Contact  */}
                        <div className='space-y-4'>
                            <h2 className='font-bold text-white text-xl lg:text-2xl text-center lg:text-start'>Contact Us</h2>
                            <ul className='space-y-2 flex flex-col items-center lg:items-start'>
                                <li className='flex gap-2'><IoMdCall className='text-gray-300 w-4 h4 lg:w-6 lg:h-6' />
                                    <span className='text-gray-300 text-sm lg:text-lg'>(+880) 1867-XXXX01</span>
                                </li>
                                <li className='flex gap-2'><MdOutlineEmail className='text-gray-300  w-4 h-4 lg:w-6 lg:h-6' />
                                    <span className='text-gray-300 text-sm lg:text-lg'>qurbanihat@test.com</span>
                                </li>
                                <li className='flex gap-2'><SlLocationPin className='text-gray-300 w-4 h-4 lg:w-6 lg:h-6' />
                                    <span className='text-gray-300 text-sm lg:text-lg'>Gabtoli Cattle Market, Hasil Gor 1, Dhaka-1216, Bangladesh</span>
                                </li>
                            </ul>
                        </div>

                        {/* footer-right section */}
                        <div className='space-y-4'>

                            <ul className='flex gap-3 ml-2 justify-center lg:justify-start'>
                                <li className='bg-gray-300 hover:bg-linear-to-r hovere:from-green-700 hover:to-green-400 hover:transition-all hover:duration-200 w-7 h-7 flex flex-col items-center justify-center'>
                                    <SiWhatsapp className='cursor-pointer hover:text-white' />
                                </li>
                                <li className='bg-gray-300 hover:bg-linear-to-r hover:from-fuchsia-800 hover:to-purple-500 hover:transition-all hover:duration-200 w-7 h-7 flex flex-col items-center justify-center'>
                                    <BsInstagram className='cursor-pointer hover:text-white' />
                                </li>
                                <li className='bg-gray-300 hover:bg-linear-to-r hover:from-blue-600 hover:to-blue-400 hover:transition-all hover:duration-200 w-7 h-7 flex flex-col items-center justify-center'>
                                    <FaFacebookSquare className='cursor-pointer hover:text-white' />
                                </li>
                                <li className='bg-gray-300 hover:bg-linear-to-r hover:from-gray-600 hover:to-cyan-300 hover:transition-all hover:duration-200 w-7 h-7 flex flex-col items-center justify-center'>
                                    <FaXTwitter className='cursor-pointer hover:text-white' />
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>

                <hr className="divider w-full  text-gray-700"></hr>

                {/* footer end */}
                <div className='w-full mx-auto flex flex-col gap-4 lg:flex-row  justify-between items-center text-sm text-gray-400 pb-6 px-4 sm:px-6 lg:px-8'>

                    <p className='sm:text-center'>&copy; 2026 <span className='text-cyan-200'>QurbaniHat</span>. All rights reserved.</p>

                    <div className='flex gap-6 '>
                        <p className='hover:text-white cursor-pointer'>Privacy Policy</p>
                        <p className='hover:text-white cursor-pointer'>Terms of Service</p>
                        <p className='hover:text-white cursor-pointer'>Cookies</p>
                    </div>

                </div>


            </div>
        </footer>
    );
};

export default Footer;