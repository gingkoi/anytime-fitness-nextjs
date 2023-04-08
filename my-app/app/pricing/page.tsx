import React from "react";
import data from "../../components/Pricing/priceData";
import PricingCard from "@/components/Pricing/PricingCard";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen h-auto py-16 font-poppin animation_body">
      <div className="max-w-[300px] space-y-3 my-5">
        <p className="font-black text-5xl text-center">Start Here</p>
        <p className="text-2xl text-center">Choose your plan</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 my-5 px-5">
        <PricingCard data={data[0]} />
        <div className="outline outline-black rounded-lg scale-105">
          <PricingCard data={data[1]} />
        </div>
        <PricingCard data={data[2]} />
      </div>
    </div>
  );
};

export default Pricing;
