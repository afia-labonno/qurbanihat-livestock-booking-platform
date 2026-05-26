'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateUserPage = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleUpdate = async () => {
        const { data, error } = await authClient.updateUser({
            image: image,
            name: name,
        })
        console.log("data: ", data);

        if (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='container mx-auto p-20 flex justify-center items-center'>

            <div className='max-w-2xl w-full space-y-4 shadow-2xl rounded-md bg-base-200 p-8'>
                <h2 className='text-2xl text-amber-900 font-bold text-center mb-5'>Update Profile</h2>
                <legend>Update Your Name</legend>
                <input
                    type='text'
                    placeholder='Enter name'
                    className='input w-full'
                    onChange={(e) => setName(e.target.value)}
                />

                <legend>Update You Image</legend>
                <input
                    type='text'
                    placeholder='Enter Image Url'
                    className='input w-full'
                    onChange={(e) => setImage(e.target.value)}
                />

                <Link href={'/'}>
                    <button onClick={handleUpdate} className='btn btn-primary mt-4'>
                        Update Information
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default UpdateUserPage;