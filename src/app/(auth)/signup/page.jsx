'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuAsterisk } from 'react-icons/lu';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const SignUpPage = () => {

    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleGoogleSignin = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("data: ", data);
    }

    const handleRegister = async (data) => {

        const { name, email, photo, password } = data;

        const request = {
            name,
            email,
            password,
        }
        if (photo) {
            request.image = photo;
        }

        const { data: res, error } = await authClient.signUp.email(request);
        if (error) {
            console.log("error: ", error);
            toast.error(error.message)
            return;
        }
        if (res) {
            toast.success("Sign Up Successfull !")
            router.push('/');
            router.refresh;
        }
    }


    return (

        <div className='container mx-auto min-h-[80vh] bg-base-200 flex justify-center items-center'>
            <div className='p-4 rounded-xl bg-white max-w-4xl shadow-2xl border-base-200'>
                <h2 className='text-3xl font-bold py-4'>Sign Up Your Account</h2>
                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>

                    {/* name */}
                    <fieldset className='fieldset'>
                        <div className='flex gap-1 items-center'>
                            <legend className='fieldset-legend font-semibold'>Your Name</legend>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>

                        <input
                            {...register("name", { required: "Name field is required" })}
                            type="text"
                            className='input'
                            placeholder='Enter Your Name'
                        />
                        {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    {/* email */}
                    <fieldset className='fieldset'>
                        <div className='flex gap-1 items-center'>
                            <legend className='fieldset-legend font-semibold'>Email Address</legend>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>
                        <input
                            {...register("email", { required: "Email field is required" })}
                            type="email"
                            className='input'
                            placeholder='Enter Your Email Address'
                        />
                        {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    {/* photo */}
                    <fieldset className='fieldset'>
                        <div className='flex gap-1 items-center'>
                            <legend className='fieldset-legend font-semibold'>Photo</legend>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>
                        <input
                            {...register("photo", { required: "Photo field is required" })}
                            type="text"
                            className='input'
                            placeholder='Choose a Photo'
                        />
                        {errors.photo && <p className='text-sm text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    {/* password */}
                    <fieldset className='fieldset relative'>
                        <div className='flex gap-1 items-center'>
                            <legend className='fieldset-legend font-semibold'>Password</legend>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>

                        <input
                            {...register("password", { required: "Password field is required" })}
                            type={isShowPassword ? "text" : "password"}
                            className='input'
                            placeholder='Enter Your Password'
                        />
                        <span className='cursor-pointer absolute right-1 top-14'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >

                            {isShowPassword ? <VscEye /> : <VscEyeClosed />}
                        </span>

                        {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn w-full btn-primary text-white'>Confirm Registration</button>
                    <button onClick={handleGoogleSignin}
                        className='btn w-full text-blue-600
                                    border-2 border-gray-600 
                                    flex gap-2 font-semibold'>
                        <FaGoogle />
                        Continue With Google
                    </button>

                    <p className='mt-2 text-center'>Already have an account?
                        <Link href={"/signup"} className='text-blue-600 font-semibold hover:text-blue-600 hover:font-bold'>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default SignUpPage;