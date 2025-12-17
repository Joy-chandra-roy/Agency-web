import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const services = [
    {
        icon: FiCalendar,
        title: "Customizable Settings",
        description: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
        icon: FiCompass,
        title: "Developer-Friendly",
        description: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
    },
    {
        icon: FiActivity,
        title: "Responsive Design",
        description: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
    },
    {
        icon: FiTruck,
        title: "Cloud Integration",
        description: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
    },
]


const Services = () => {
    return (
        <div className='section-container bg-white'>

            <HeadingSection subheading="Service" heading="Explore Our Range of Professional Services Tailored to meet Your Business Needs."  description="We provide modern, fast, and secure website design and development services to help your business grow online. Our goal is to create visually appealing, user-friendly, and performance-driven websites tailored to your needs"/>


            {/* services container */}
            
           <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16'>
             {
                services.map((service, index)=>(
                    <div key={index} className='flex flex-col mt-20 items-center text-center p-6 hover:shadow-2xl hover:rounded-md transition cursor-pointer '>
                        <div className='flex items-center  gap-3 '>
                                <service.icon className='text-4xl text-blue-600 '/> 
                                <h4 className='text-3xl font-bold'>{service.title}</h4>
                        </div>
                        <p className='text-gray-600 mt-4'>{service.description}</p>
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

export default Services;