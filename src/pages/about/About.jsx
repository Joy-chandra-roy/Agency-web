import React from "react";
import HeadingSection from "./../../components/HeadingSection";
import aboutImg from "../../../public/about.jpg"
import Tools from "../home/Tools";

const About = () => {
  return (
    <div className="section-container">
      <HeadingSection subheading="About" heading="Get to Know Us" />

      {/* content section */}
      <div className="mt-20" >
        <div className=" flex flex-col lg:flex-row justify-between gap-3">
          <div className="w-2/2">
            <img src={aboutImg} alt=""  className="w-3/4 object-cover mx-auto"/>
            </div>
          <div className="space-y-10">
            <p>We are a creative web agency dedicated to building modern, responsive, and user-friendly websites that help businesses grow online. Our team focuses on clean design, strong functionality, and smart solutions to deliver high-quality digital experiences. From planning to launch, we work closely with our clients to turn their ideas into powerful online platforms.</p>
            <p>
              Our web agency combines creativity and technology to craft stunning websites that leave a lasting impression. We specialize in custom web design, development, and digital solutions that are fast, secure, and scalable. Our goal is to help brands stand out, connect with their audience, and achieve real results online.
            </p>
          </div>
        </div>


        
        </div>
        <Tools/>
    </div>
  );
};

export default About;
