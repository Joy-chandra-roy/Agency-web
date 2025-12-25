import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import { NavLink } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const teamMembers= [
    {
        id: 1,
        image:"/images/members/person1.png",
        name:"Mark Johanson",
        role:"Designer",
        linkedIn:"https://linkedin.com",
        twitter:"https://twitter.com",
        instagram:"https://instagram.com",
        facebook:"https://facebook.com"
        },
    {
        id: 1,
        image:"/images/members/person2.png",
        name:"Jolison",
        role:"Designer and Photographer",
        linkedIn:"https://linkedin.com",
        twitter:"https://twitter.com",
        instagram:"https://instagram.com",
        facebook:"https://facebook.com"
        },
    {
        id: 1,
        image:"/images/members/person3.png",
        name:"Lio jon",
        role:"Digital Marketing",
        linkedIn:"https://linkedin.com",
        twitter:"https://twitter.com",
        instagram:"https://instagram.com",
        facebook:"https://facebook.com"
        },
    {
        id: 1,
        image:"/images/members/person4.png",
        name:"Marko",
        role:"Web developer",
        linkedIn:"https://linkedin.com",
        twitter:"https://twitter.com",
        instagram:"https://instagram.com",
        facebook:"https://facebook.com"
        }
]

const TeamSection = () => {
    return (
        <div className=' bg-colorBg'>
            <div className='section-container'>
                <HeadingSection subheading=" Our Team" heading="Meet the Expert" description=""/>

            {/* team member card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    teamMembers.map(member =>(
                        <div key={member.id} className='bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-11 duration-300 cursor-pointer'>
                            <img src={member.image} alt={member.name} className='w-full h-56 object-cover'/>

                            {/* content */}
                            <div className='p-5'>
                                <h3 className='font-bold text-xl text-gray-600 mb-2 '>{member.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{member.role}</p>

                                {/* social icon */}
                                <div className='flex items-center gap-2'>

                                    <NavLink to={member.linkedIn}><FaLinkedin className='text-blue-600 hover:text-blue-800'/></NavLink>
                                    <NavLink to={member.instagram}><FaInstagram className='text-blue-600 hover:text-blue-800'/></NavLink>
                                    <NavLink to={member.twitter}><FaTwitter className='text-blue-600 hover:text-blue-800'/></NavLink>
                                    <NavLink to={member.facebook}><FaFacebook className='text-blue-600 hover:text-blue-800'/></NavLink>
                                </div>

                                {/* contact button */}
                                <button className='btn btn-primary mt-5 rounded-4xl'>Contact {member.name.split(" ")[0]}</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            </div>
            
        </div>
    );
};

export default TeamSection;