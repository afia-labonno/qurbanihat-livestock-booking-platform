import { getFeatured } from '@/lib/data';
import Image from 'next/image';
import React from 'react';


const Featured = async () => {
    const data = await getFeatured();
    // console.log("Featured data: ", data);

    return (
        <div>

            <div className='bg-linear-to-l from-amber-950 to-amber-700 py-10 w-full'>
                <h2 className='text-center font-bold text-2xl 
                lg:text-4xl text-white'>

                    Featured Animals
                </h2>
            </div>

            {/* featured card */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 lg:px-8 py-12">
                {
                    data.map((featured) => (

                        <div key={featured.id} className='card bg-base-100 shadow-md hover:shadow-xl transition duration-300 space-y-2 p-4'>
                            <div className="space-y-2">
                                <figure className='h-60 overflow-hidden'>
                                    <Image
                                        src={featured.image}
                                        width={300} height={300}
                                        alt={featured.type}
                                        className='rounded-md object-cover w-full h-full'
                                    />
                                </figure>
                                <h2 className="card-title text-amber-800 font-semibold">
                                    {featured.category}
                                    <div className="badge bg-amber-200 text-amber-800 text-xs justify-end rounded-full">
                                        {featured.total}+ Available
                                    </div>
                                </h2>
                                <p className='text-sm text-amber-600'>{featured.description}</p>

                                    <button className='btn rounded-lg
                                        bg-linear-to-l from-amber-700 to-orange-400 text-zinc-300       
                                        transition-all duration-500 hover:scale-105 border-2 border-amber-300 shadow-lg'
                                    >

                                        Explore More
                                    </button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Featured;