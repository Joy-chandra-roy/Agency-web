import React from 'react';
import errorIcon from "../assets/rocket-icon.png"
import { NavLink } from 'react-router';
const Error = ({message="Page not found" , code=4004}) => {
    return (
        <div className='flex flex-col justify-center items-center text-center min-h-screen space-y-5'>
            <img src={errorIcon} alt="" />
            <h1 className='text-4xl font-bold text-gray-700'>{message}</h1>
            <p className='text-[#21272A] md:w-2/5 w-full mx-auto'>Sorry, the page you are looking for doesn’t exist or may have been moved. Please check the URL or return to the homepage to continue browsing.</p>

            <NavLink to="/"  className="bg-green-500 text-white rounded-md shadow-md  hover:bg-green-600 transition p-2">Go to Home page</NavLink>
        </div>
    );
};

export default Error;