import React from "react";
import HeadingSection from "./../../components/HeadingSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import {Autoplay, Pagination } from 'swiper/modules';


const reviews =[
  {
    id: 1,
    logo: "/images/logos/logo1.png",
    review: "This platform has revolutionized how we manage our projects. Highly recommend!",
    author: "John Doe",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    logo: "/images/logos/logo2.png",
    review: "Excellent user experience and outstanding support team.",
    author: "Sarah Smith",
    role: "Product Manager, InnovateX",
  },
  {
    id: 3,
    logo: "/images/logos/logo1.png",
    review: "Our productivity increased significantly after using this service.",
    author: "Michael Brown",
    role: "CTO, DevSolutions",
  },
  {
    id: 4,
    logo: "/images/logos/logo2.png",
    review: "Clean design, fast performance, and very reliable.",
    author: "Emily Johnson",
    role: "UI/UX Designer, CreativeHub",
  },
  {
    id: 5,
    logo: "/images/logos/logo1.png",
    review: "A must-have tool for modern businesses and startups.",
    author: "David Wilson",
    role: "Founder, StartSmart",
  },
  {
    id: 6,
    logo: "/images/logos/logo2.png",
    review: "Easy to use and extremely powerful features.",
    author: "Olivia Martinez",
    role: "Operations Lead, FlowTech",
  },
  {
    id: 7,
    logo: "/images/logos/logo1.png",
    review: "Their customer service is quick and very helpful.",
    author: "James Anderson",
    role: "Marketing Head, Brandify",
  },
  {
    id: 8,
    logo: "/images/logos/logo2.png",
    review: "Helped us scale our projects without any hassle.",
    author: "Sophia Taylor",
    role: "Project Lead, ScaleUp",
  },
  {
    id: 9,
    logo: "/images/logos/logo1.png",
    review: "Secure, reliable, and very well documented.",
    author: "Daniel Thomas",
    role: "Backend Engineer, CloudNet",
  },
  {
    id: 10,
    logo: "/images/logos/logo2.png",
    review: "One of the best platforms we have used so far.",
    author: "Isabella Moore",
    role: "Business Analyst, DataWise",
  },
]

const Testimonial = () => {
  return (
    <div className="section-container bg-colorBg">
      <HeadingSection
        subheading="Testimonials"
        heading="What Our Clients Says"
      />

      {/* testimonial carousel */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper"
      >

        
        {
          reviews.map((review)=>(
            <SwiperSlide key={review.id}>
                <div className="shadow-lg py-3 px-2 rounded-2xl mb-10">
                  <img src={review.logo} alt="" className="size-28 mx-auto  object-contain"/>
                  <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto text-center">{review.review}</p>
                  <div>
                    <div  className="w-12 h-12 rounded-full bg-blue-500 text-white 
                    flex items-center justify-center mx-auto mb-3">{review.author.charAt(0)}</div>
                    <h3 className="text-2xl font-bold text-center ">{review.author}</h3>
                    <p className="text-sm text-gray-600 text-center  mb-4">{review.role}</p>
                  </div>
                </div>
            </SwiperSlide>
          ))
        }
        

      </Swiper>
    </div>
  );
};

export default Testimonial;
