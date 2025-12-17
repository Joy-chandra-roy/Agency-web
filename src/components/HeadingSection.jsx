import React from "react";

const HeadingSection = ({subheading, heading, description}) => {
  return (
    <div>
      {/* heading section */}
      <div className="text-center mb-10">
        <p className="text-[#001D6C] uppercase">{subheading}</p>
        <h2 className="font-bold text-3xl md:w-3/5 mx-auto">{heading}</h2>
        {
            description && <p className="text-gray-600 mt-4 md:w-4/5 mx-auto">{description}</p>
        }
      </div>
    </div>
  );
};

export default HeadingSection;
