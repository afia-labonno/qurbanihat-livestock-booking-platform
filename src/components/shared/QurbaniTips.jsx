import { getTips } from '@/lib/data';
import React from 'react';
import { BiSolidInjection } from 'react-icons/bi';
import { FaTruck } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import { IoBookmarks } from 'react-icons/io5';
import { TbRulerMeasure2 } from 'react-icons/tb';

const QurbaniTips = async () => {
    const tips = await getTips();

    const icons = {
        cow: <GiCow className='w-4 h-4 -rotate-y-180  text-amber-700' />,
        injection: <BiSolidInjection className='w-4 h-4 -rotate-y-180 text-amber-700' />,
        ruler: <TbRulerMeasure2 className='w-4 h-4  text-amber-700' />,
        truck: <FaTruck className='w-4 h-4 -rotate-y-180 text-amber-700' />,
    }

    return (
        <div className='space-y-8 py-10 px-4 sm:px-8'>

            <div className='max-w-6xl mx-auto text-start px-6 md:px-10 py-6 shadow-md hover:shadow-lg
                 bg-base-300 rounded-md relative border-b-2
                border-amber-200 transition-all duration-500 '>
                <IoBookmarks
                    className='absolute  top-2 left-2 lg:-top-4 lg:left-2 text-xl lg:text-5xl text-amber-800 animate-bounce [animation-duration:5s]' />

                <h2 className='text-2xl bg-linear-to-r from-amber-950 to-amber-600
                     transition-all duration-300 bg-clip-text text-transparent
                    lg:text-4xl font-bold px-2'>
                    Qurbani Tips
                </h2>
                <p className='m-2 text-amber-700 text-sm lg:text-base'>
                    Learn essential tips for choosing healthy and suitable animals for Qurbani.
                </p>

                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-24 mt-6'>
                    {
                        tips.map((tip) => (
                            <div key={tip.id}
                                className='card shadow-md hover:shadow-lg bg-base-200 rounded-lg p-4 border border-lime-200 transition-all duration-500'>

                                <div className="flex items-center gap-2 bg-zinc-100 w-fit px-5 py-2 rounded-full shadow-md">

                                    {icons[tip.icon]}

                                    <span className="bg-linear-to-r from-amber-800 to-amber-500 bg-clip-text text-transparent font-semibold text-xs">
                                        {tip.badge}
                                    </span>

                                </div>

                                {/* title */}
                                <h2 className='text-amber-900 text-lg lg:text-xl font-semibold mt-3'>

                                    {tip.title}

                                </h2>

                                {/* description */}
                                <p className=' text-sm lg:text-md text-pink-800 mt-2'>
                                    {tip.description}
                                </p>


                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default QurbaniTips;