import Image from 'next/image';
import bannerImage from '@/assets/banner.png';
import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto grid 
                        grid-cols-1 lg:grid-cols-4 
                        gap-8 py-16 px-20 lg:px-16
                        '>

            <div className='space-y-4 col-span-2 px-4'>
                <div className="flex items-center gap-2 bg-zinc-100 w-80 px-5 py-4 rounded-full shadow-md">
                    <span className="w-3 h-3 rounded-full bg-linear-to-r from-amber-800 to-orange-500 animate-pulse "></span>
                    <span className="bg-linear-to-r from-amber-800 to-orange-500 text-sm
                                bg-clip-text text-transparent 
                                font-semibold transition-all 
                                duration-1000">
                        Sacrifice with trust. Share with heart.
                    </span>
                </div>

                <h2 className='text-2xl lg:text-4xl font-bold bg-linear-to-r from-amber-950 to-amber-800 bg-clip-text text-transparent'>
                    Find Your Perfect Qurbani Animals
                </h2>
                <p className='text-amber-800 text-md'>Discover healthy and premium-quality animals for your Qurbani with ease. QurbaniHat connects you with trusted livestock sellers, detailed animal information, and a smooth booking experience — all in one place. Explore different breeds, compare prices, and choose the right animal with confidence for your sacred occasion.</p>
                <button className='btn rounded-full 
                                    bg-linear-to-r
                                     from-orange-800 
                                     to-orange-500 
                                     text-white       
                                     transition-all duration-500
                                     hover:scale-105 
                                     border-2 border-amber-300
                                     shadow-lg'>
                    Browse Animals
                </button>
            </div>

            <div className='col-span-2 px-4'>
                <Image
                    src={bannerImage}
                    width={800}
                    height={600}
                    alt='bannerImg'
                    className='rounded-md shadow-lg relative'
                />
            </div>
        </div>
    );
};

export default Banner;