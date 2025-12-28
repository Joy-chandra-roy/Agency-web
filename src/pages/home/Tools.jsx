import React from 'react';
import { FiSettings ,FiCode,FiSmartphone,FiCloud} from "react-icons/fi";
import HeadingSection from '../../components/HeadingSection';


const tools = [
    {
        icon: FiSettings ,
        title: "Customizable Settings",
        descrip:"Easily configure tools to fit your project requirements"
    },
    {
        icon: FiCode ,
        title: "Customizable Settings",
        descrip:"Easily configure tools to fit your project requirements"
    },
    {
        icon: FiSmartphone ,
        title: "Customizable Settings",
        descrip:"Easily configure tools to fit your project requirements"
    },
    {
        icon: FiCloud ,
        title: "Customizable Settings",
        descrip:"Easily configure tools to fit your project requirements"
    }
]

const Tools = () => {
    return (
        <div className='section-container'>


            <h1 className='text-3xl font-bold mb-5'>
                All-in-One Solution for Your Projects
            </h1>

            {/* render tools here */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    tools.map((tool, index)=>(
                        <div key={index} className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition space-y-2 text-center cursor-pointer'>
                                <tool.icon className='text-blue-600 text-4xl mb-4'/>
                                <h3 className='text-2xl font-bold'>{tool.title}</h3>
                                <p>{tool.descrip}</p>
                        </div>
                    ))
                }
            </div>

            <div className='text-center'>
                <button className='btn btn-primary mt-10 '>Explore More</button>
            </div>
        </div>
    );
};

export default Tools;