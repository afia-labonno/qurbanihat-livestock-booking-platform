'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const UpdateUserPage = () => {

    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();

        const isNameUpdated = name && name !== user?.name;
        const isImageUpdated = image && image !== user?.image;


        if (!isNameUpdated || !isImageUpdated) {
            toast.warning("Please update both of the field");
            return;
        }

        const { data, error } = await authClient.updateUser({
            image: image,
            name: name,
        })
        // console.log("data: ", data);
        if (data) {
            toast.success("Update Information Successfully")
            router.push('/')
        }

        if (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='container mx-auto p-20 flex justify-center items-center'>

            <div className='max-w-2xl w-full space-y-4 shadow-2xl rounded-md bg-base-200 p-8 relative'>
                <h2 className='text-2xl text-amber-900 font-bold text-center mb-5'>Update Profile</h2>

                <Link href={`/`}>
                    <button className='btn btn-ghost mt-6 absolute right-4 top-0.5'>
                        <TiDelete className='text-2xl text-right text-red-500' />
                    </button>
                </Link>

                <legend>Update Your Name</legend>
                <input
                    type='text'
                    defaultValue={user?.name}
                    placeholder='Enter name'
                    className='input w-full'
                    onChange={(e) => setName(e.target.value)}
                />

                <legend>Update Your Image</legend>
                <input
                    type='text'
                    defaultValue={user?.image}
                    placeholder='Enter Image Url'
                    className='input w-full'
                    onChange={(e) => setImage(e.target.value)}
                />


                <button onClick={handleUpdate}
                    type='submit'
                    className='btn btn-primary mt-4'>
                    Update Information
                </button>



            </div>

        </div>
    );
};

export default UpdateUserPage;