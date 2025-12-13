import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import banner from "/src/assets/banner.png";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-colorBg">
      <div className="max-w-screen-2xl container mx-auto px-5 py-20 flex flex-col lg:flex-row justify-between items-center">
        {/* left side content */}
        <div className="space-y-5 text-center lg:text-start">
          <h1 className="text-4xl font-bold">
            Creative Web Design For Businesses
          </h1>
          <p>
            Unlock your design skills to create beautiful websites and apps with{" "}
            <br /> a poweful and easy-to-use tool.
          </p>

          <NavLink
            to="/"
            className="btn btn-primary px-8 hover:bg-violet-800 duration-300 text-white font-semibold text-xl  "
          >
            Get start
            <FaArrowRightLong />
          </NavLink>
        </div>

        {/* right side video */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
          <div className="relative group">
            <img
              src={banner}
              alt="banner image"
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute inset-0 flex justify-center items-center rounded-lg "
              onClick={openModal}
            >
              <FaRegPlayCircle className="text-white text-5xl hover:text-blue-700 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-xl w-full relative">
              <button className="absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full" onClick={closeModal}>
                &times;
              </button>

              <iframe
              className="w-full aspect-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mq508HXzccI?si=ys0WfN_gs1TupDZq"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
