import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";
import { TiTick } from "react-icons/ti";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250,
    saves:" $25 USD per month, paid annually",
    features: ["1 project", "Basic Support", "Access to all templates", "5GB"],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650,
    saves:" $55 USD per month, paid annually",
    features: [
      "5 project",
      "Priority Support",
      "Access to all templates",
      "25GB storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950,
    saves:" $85 USD per month, paid annually",
    features: [
      "Unlimited project",
      "24/7 Support",
      "Access to all templates",
      "Unlimited storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <div className="section-container">
        <HeadingSection
          subheading="Pricing"
          heading="Choose Your Plan"
          description="Our pricing plans are flexible and design to fit your need. Choose a plan that works best for you."
        />

        {/* toggle for yearly/monthly plan */}
        <div className="text-center mb-10">
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-lg text-gray-600">
              {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
            </span>
            <div className="relative">
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-primary"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
            </div>
          </label>
        </div>

        {/* pricing plan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xs cursor-pointer"
            >

              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 my-3">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-5">
                  Best for{plan.name.toLowerCase()}
                </p>

                {/* pricing */}
                <div  className="text-3xl font-bold text-gray-800">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-sm text-gray-500">/
                    {
                        isYearly? "year":"month"
                    }
                  </span>
                </div>

                    <p>
                        {isYearly?plan.saves:""}
                    </p>

              </div>

              {/* button */}
              <div className="p-5 text-center">
                <button className="btn btn-primary rounded-full hover:bg-blue-800 transition duration-300">Choose {plan.name}</button>
              </div>

              {/* features */}
              <div className="p-5 md:px-1 md:py-5">
                <ul>
                    {
                        plan.features.map((feature, index)=>(
                            <li key={index} className="flex items-center gap-5 mb-2 pl-8">
                                <TiTick />{feature}
                            </li>
                        ))
                    }
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
