import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="section-container">
        <HeadingSection
          subheading="Contact us"
          heading="Let's Build Something Great Together"
        />

        <div className="hero  flex flex-col lg:flex-row justify-around gap-10 ">
          <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-colorBg">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Let’s Start a Conversation</h1>
              <div className="flex gap-3 mt-5 ml-10 ">
                    <FaFacebook  className="text-5xl text-primary cursor-pointer"/>
                    <FaYoutube className="text-5xl text-primary cursor-pointer"/>
                    <FaInstagram className="text-5xl text-primary cursor-pointer"/>
                    <FaTwitter className="text-5xl text-primary cursor-pointer"/>
              </div>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
              <div className="card-body">
                <fieldset className="fieldset ">
                  <label className="label text-black">Your Name</label>
                  <input type="text" className="input mb-5" placeholder="your name" />
                  <label className="label text-black">Email</label>
                  <input
                    type="email"
                    className="input mb-5"
                    placeholder="joy@gamil.com"
                  />
                  <label className="text-black label">Message</label>
                  <textarea className="textarea" placeholder="text your message"></textarea>
                  
                  <button className="btn btn-primary mt-4" type="submit">Submit</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
