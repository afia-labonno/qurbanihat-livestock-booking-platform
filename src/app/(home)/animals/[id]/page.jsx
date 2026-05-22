import { getAnimalsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { TbCurrencyTaka } from 'react-icons/tb';

const AnimalsDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log("id: ", id);

    const animal = await getAnimalsById(id);
    // console.log(id);

    return (
        <div>
            Animal Details Page
            <div className='max-w-3xl mx-auto my-6'>
                <div className="card bg-base-100 shadow-sm p-2">

                    <div className="card-body">

                        <figure>
                            <Image
                                src={animal?.image}
                                alt={animal?.name}
                                width={600}
                                height={600}
                                className='w-full object-cover'
                            />
                        </figure>

                        <h2 className="card-title text-lg lg:text-xl text-amber-800 font-semibold">
                            {animal.name}
                            <div className="badge bg-amber-200 text-amber-800 text-xs justify-end rounded-full">
                                {animal.category}
                            </div>
                        </h2>

                        <p>{animal?.description}</p>

                        <div className='flex justify-between gap-20'>
                            <div className='text-orange-900'>
                                <p>Breed: {animal?.breed}</p>
                                <p>Weight: {animal?.weight}kg</p>
                            </div>
                            <p className='flex items-center gap-1 mx-2 text-amber-700 font-semibold'><IoLocationSharp className='text-red-500 animate-pulse [animate-duration:2s]' />{animal.location}</p>
                        </div>

                        <div className='divider'></div>

                        <div className='text-orange-900 flex justify-between'>
                            <p>Health: {animal?.healthStatus}</p>
                            <p  className='flex items-center gap-2'>Vaccinated:
                                {
                                    animal.vaccinated ? (
                                        <span className='badge badge-success text-white'>Yes!</span>
                                    ): (
                                         <span className='badge badge-warning text-white'>Not Yet</span>
                                    )
                                }
                            </p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='flex items-center gap-1 mx-2 text-amber-700 font-semibold'><FaUserAlt className='text-amber-700 ' />seller: {animal.sellerName}</p>
                        <p
                            className='flex items-center font-semibold text-md lg:text-lg text-orange-800'>
                            <TbCurrencyTaka />{animal.price}
                        </p>
                        </div>

                    </div>

                    <Link href={`/booking/${animal.id}`}>
                        <button className='btn btn-warning w-full text-white'>Book Now</button>
                    </Link>
                    

                </div>
            </div>
        </div>
    );
};

export default AnimalsDetailsPage;