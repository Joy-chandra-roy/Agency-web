import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { NavLink } from 'react-router';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg'>
                <h2 className='text-3xl font-bold text-center text-gray-800 mb-5'>Please Register</h2>

                {/* Register form */}
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Name</label>

                        <input 
                        type="name" 
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2  `} 
                        placeholder='your name' />

                     

                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email</label>

                        <input 
                        type="email" 
                        {...register("email", { required: "Email is required" , pattern:{
                            value:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message:"Invalid email address"
                        } })}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2  `} 
                        placeholder='joy@gmail.com' />

                        {errors.email && <p className='text-red-600 text-sm italic mt-2'>{errors.email.message}</p>}

                    </div>

                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>password</label>
                        <input 
                        type="password" 
                        
                         {...register("password", { required: "Password is required" , pattern:{
                            value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message:"Password must be at least 6 character long"
                        } })}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2  `} 
                        placeholder='******'/>

                         {errors.password && <p className='text-red-600 text-sm italic mt-2'>{errors.password.message}</p>}
                    </div>

                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer'>Sign Up</button>
                </form>

                {/* social login */}
                <div className='text-center space-y-4 mt-5'>
                    <p className='text-gray-600'>Or sign-up with</p>

                    <div className='flex items-center justify-center px-2 gap-3 flex-wrap'>

                        <button className='flex items-center px-2 py-2 space-x-2 text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-600'>
                            <FaGoogle/>
                            <span>Google</span>
                        </button>
                    
                    
                        <button className='flex items-center px-2 py-2 space-x-2 text-white bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-900'>
                            <FaGithub/>
                            <span>Github</span>
                        </button>
                    
                    
                        <button className='flex items-center px-2 py-2 space-x-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600'>
                            <FaFacebook/>
                            <span>Facebook</span>
                        </button>
                    </div>
                    <p>Have an account? Please <NavLink to="/login" className="text-blue-600 hover:underline">Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;