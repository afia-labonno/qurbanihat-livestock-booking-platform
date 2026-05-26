'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { TbCurrencyTaka } from 'react-icons/tb';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const BookingForm = ({ animal }) => {

    const formState = {
        name: "", email: "", phone: "", address: "",
    }

    const [formData, setFormData] = useState(formState)

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.success("Booking Comfirmed Successfully !")

        setTimeout(()=>{
            router.push('/animals')
        },3000);
       
        setFormData(formState);

    };



    return (
        <div className='container mx-auto min-h-[80vh] bg-base-200 flex justify-center items-center py-12 lg:py-10'>
            <div className='max-w-2xl w-full bg-base-100 shadow-2xl border border-amber-100 rounded-md pb-10 lg:pb-4 py-14 px-6 lg:space-y-0.5 relative'>

                {/* <div className='flex justify-between items-center px-4'> */}
                    <h2 className='text-xl lg:text-3xl font-bold text-amber-900 text-center'>
                        Booking Form
                    </h2>
                    {/* cancel btn */}
                    <Link href={`/animals/${animal.id}`}>
                        <button className='btn btn-ghost mt-6 absolute right-4 top-0.5'>
                            <TiDelete className='text-2xl text-right text-red-500' />
                        </button>
                    </Link>
                {/* </div> */}

                <div className='divider mx-auto px-6'></div>

                <div className='flex justify-between gap-8 p-4'>
                    <div>
                        <h3 className='text-lg lg:text-xl text-amber-800 font-semibold'>
                            {animal?.name}
                        </h3>
                        <p className='text-md text-amber-600 flex gap-1 items-center pl-2'>
                            {/* <IoIosCheckmarkCircle className='text-amber-600'/> */}
                            Breed: {animal?.breed}
                        </p>
                        <p className='flex items-center gap-1 text-amber-800'>
                            <IoLocationSharp className='text-red-500' />
                            {animal?.location}
                        </p>
                        <p className='text-amber-800 flex items-center font-semibold'>
                            <TbCurrencyTaka className='text-amber-600' />
                            {animal?.price}
                        </p>

                    </div>

                    <div>
                        <Image src={animal?.image}
                            width={200} height={200}
                            alt={animal.name}
                            className='object-cover rounded-md'
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* name */}
                    <fieldset>
                        <legend className='fieldset-legend text-md lg:text-lg font-semibold text-amber-800'>Name</legend>
                        <input name='name'
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter Your Name'
                            className='input input-bordered w-full' />
                    </fieldset>

                    {/* email*/}
                    <fieldset>
                        <legend className='fieldset-legend text-md lg:text-lg font-semibold text-amber-800'>Email Address</legend>
                        <input name='email'
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Your Email'
                            className='input input-bordered w-full' />
                    </fieldset>

                    {/* phone */}
                    <fieldset>
                        <legend className='fieldset-legend text-md lg:text-lg font-semibold text-amber-800'>Phone</legend>
                        <input name='phone'
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter Your Phone Number'
                            className='input input-bordered w-full' />
                    </fieldset>

                    {/* address */}
                    <fieldset>
                        <legend className='fieldset-legend text-md lg:text-lg font-semibold text-amber-800'>Address</legend>
                        <input name='address'
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Enter Your Full Address'
                            className='input input-bordered w-full' />
                    </fieldset>

                    <button className='btn w-full bg-amber-700 text-white font-semibold my-4'>Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;