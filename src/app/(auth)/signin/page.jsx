'use client'
import { authClient } from '@/lib/auth-client';
import { router } from 'better-auth/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuAsterisk } from 'react-icons/lu';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const SigninPage = () => {
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("data: ", data);
    }

    const handleLogin = async (data) => {

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({

            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",

        });
        if (error) {
            toast.error(error.message)
            return;
        }
        if (res) {
            toast.success("Sign In Successfull !")
            router.push('/');
            router.refresh();
        }
    }


    return (

        <div className='container mx-auto min-h-[80vh] bg-base-200 flex justify-center items-center'>
            <div className='p-4 rounded-xl bg-white max-w-4xl shadow-2xl border-base-200'>
            
                <h2 className='text-3xl font-bold py-4'>Sign In Your Account</h2>
                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>

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

                    <button className='btn w-full btn-primary text-white'>Sign In</button>
                    <button onClick={handleGoogleSignin}
                        className='btn w-full text-blue-700
                                                        border-2 border-gray-600 
                                                        flex gap-2 font-semibold'>
                        <FaGoogle />
                        Continue With Google
                    </button>

                    <p className='text-slate-700 text-center font-bold'>Or</p>

                    <p className='text-center'>Don't have an account?
                        <Link href={"/signup"} className='text-blue-600 font-semibold hover:text-blue-600 hover:font-bold'>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default SigninPage;