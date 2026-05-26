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

            <div className='bg-linear-to-l from-amber-950 to-amber-700 py-10 w-full'>
                <h2 className='text-center font-bold text-2xl 
                lg:text-4xl text-white'>

                    Animal Details
                </h2>
            </div>

            <div className='max-w-3xl mx-auto my-6'>
                <div className="card bg-base-100 shadow-sm p-2">

                    <figure>
                        <Image
                            src={animal?.image}
                            alt={animal?.name}
                            width={600}
                            height={600}
                            className='w-full object-cover rounded-md'
                        />
                    </figure>

                    <div className="card-body">

                        <h2 className="card-title text-lg lg:text-xl text-amber-800 font-semibold">
                            {animal?.name}
                            <div className="badge bg-amber-200 text-amber-800 text-xs justify-end rounded-full">
                                {animal?.category}
                            </div>
                        </h2>

                        <p>{animal?.description}</p>

                        <div className='flex justify-between gap-20 mt-2'>
                            <div className='text-orange-900'>
                                <p>Breed: {animal?.breed}</p>
                                <p>Weight: {animal?.weight}kg</p>
                            </div>
                            <div>

                                 <p className='flex items-center gap-2 font-semibold text-amber-600'>Vaccinated:
                                {
                                    animal.vaccinated ? (
                                        <span className='badge badge-soft badge-success text-green-800'>Yes!</span>
                                    ) : (
                                        <span className='badge badge-soft badge-warning text-yellow-600'>Not Yet</span>
                                    )
                                }
                            </p>
                            <p className='badge badge-outline badge-info my-2'>Health: {animal?.healthStatus}</p>
                                
                            </div>
                        </div>

                        <div className='divider'></div>

                        <div className='text-orange-900 flex justify-between'>
                            
                            
                            <div>
                                <p className='flex items-center gap-1 mx-2
                                             text-amber-700 font-semibold'>
                                        <IoLocationSharp className='text-red-500 animate-pulse [animate-duration:2s]' />
                                            {animal.location}
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <p className='flex items-center gap-1 mx-2 text-amber-700 font-semibold'><FaUserAlt className='text-amber-700 ' />seller: {animal.sellerName}</p>
                            <div>
                                <p className='flex items-center 
                                            font-semibold text-md 
                                            lg:text-lg text-orange-800'>

                                <span className='text-amber-600'>Price: </span>
                                <TbCurrencyTaka />{animal.price}
                            </p>
                            </div>
                        </div>

                    </div>

                    <Link href={`/booking/${animal.id}`}>
                        <button className='btn btn-warning w-full text-white mb-4'>Book Now</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default AnimalsDetailsPage;