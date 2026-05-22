'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationSharp, IoSearch } from 'react-icons/io5';
import { PiSortAscending } from 'react-icons/pi';
import { RiSortDesc } from 'react-icons/ri';
import { TbCurrencyTaka } from 'react-icons/tb';

const AnimalsClient = ({ animals }) => {

    const [sort, setSort] = useState('all');
    const [search, setSearch] = useState('');

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;

    }).filter((animal) => {
        const match = animal.type.toLowerCase().includes(search.toLocaleLowerCase()) ||
            animal.category.toLowerCase().includes(search.toLocaleLowerCase())

        return match ;
    });


    return (
        <div className='text-center lg:text-left'>

            <div className='bg-linear-to-l from-amber-950 to-amber-700 py-10 w-full'>

                <div className=' flex flex-col lg:flex-row justify-between px-4 md:px-8 lg:px-20 gap-6 lg:gap-4'>
                    {/* sort by price*/}
                    <div className="dropdown dropdown-bottom lg:dropdown-right">
                        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                            <span className='text-gray-400 text-lg lg:text-xl'>Sort By</span><PiSortAscending
                                    className=' text-md lg:text-3xl text-gray-400'/>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <button onClick={() => setSort('all')}
                                        className='btn w-full'>All</button>
                            </li>
                            <li className='flex items-center'>
                                <button onClick={() => setSort('low')}
                                    className='btn w-full'>Low<FaArrowRight />High</button>
                            </li>
                            <li className='flex items-center'>
                                <button onClick={() => setSort('high')}
                                    className='btn w-full'>High<FaArrowRight />Low</button>
                            </li>
                        </ul>
                    </div>

                    {/* heading */}
                    <div>
                        <h2 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl text-white'>
                            All Animals
                        </h2>
                    </div>

                    {/* Search Animals */}
                    <div className='flex items-center gap-2 px-4 py-3 border border-amber-300
                                     w-full lg:max-w-xs'>

                        <IoSearch className="text-gray-500 text-lg" />
                        <input onChange={(e) => setSearch(e.target.value)}
                            type="text" placeholder="Search by type or category" value={search}
                            className="bg-transparent outline-none w-full text-md text-base-300 placeholder-gray-400"
                        />
                    </div>
                </div>

            </div>

            {/* animals cards */}
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 lg:px-8 py-12'>
                {
                    sortedAnimals?.map((animal) => (
                        <div key={animal.id}
                            className='card shadow-md hover:shadow-lg bg-base-200 rounded-lg p-4 border border-lime-200 transition-all duration-500'
                        >
                            <div className='space-y-2'>
                                <figure className='h-60 overflow-hidden'>
                                    <Image
                                        src={animal.image}
                                        width={300} height={300}
                                        alt={animal.type}
                                        className='rounded-md object-cover w-full h-full'
                                    />
                                </figure>

                                <h2 className="card-title text-lg lg:text-xl text-amber-800 font-semibold">
                                    {animal.name}
                                    <div className="badge bg-amber-200 text-amber-800 text-xs justify-end rounded-full">
                                        {animal.category}
                                    </div>
                                </h2>

                                <div className='flex justify-between gap-4'>
                                    <div className='text-orange-900'>
                                        <p>Breed: {animal.breed}</p>
                                        <p>Weight: {animal.weight}kg</p>
                                    </div>
                                    <p className='flex items-center gap-1 mx-2 text-amber-700 font-semibold'><IoLocationSharp className='text-red-500 animate-pulse [animate-duration:2s]' />{animal.location}</p>
                                </div>

                                <div className='flex justify-between'>
                                    <p 
                                        className='flex items-center font-semibold 
                                        text-md lg:text-lg text-orange-800'>
                                            <TbCurrencyTaka />{animal.price}
                                    </p>

                                    <Link href={`/animals/${animal.id}`}>
                                        <button className='btn bg-amber-800 text-zinc-200'>View Details</button>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AnimalsClient;