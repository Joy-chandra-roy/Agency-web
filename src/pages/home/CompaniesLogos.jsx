import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";
import "/src/App.css";

const CompaniesLogos = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];
  return (
    <div className="bg-colorBg">
      <div className="section-container ">
        <HeadingSection
          subheading="Our Trusted Partners"
          heading="Companies we've worked with"
          description="We've partnered with some of the most innovative and leading companies to bring the best solutions to you."
        />

        {/* logo container */}
        <div className="mt-20 relative overflow-hidden border-y[1px] p-8">
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform cursor-pointer"
              >
                <logo.icon
                  className="text-4xl text-blue-600"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesLogos;
