import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const PricingCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white p-8 rounded-lg space-y-7 border-2">
      <p className="font-bold text-3xl text-center">{data.membership}</p>
      <p className="text-center text-gray-600">No enrollment fees.</p>
      {data.price > 120 ? (
        <p className="font-bold text-5xl text-center">
          ${data.price}
          <span className="font-normal text-xl text-gray-600">/Monthly</span>
        </p>
      ) : (
        <p className="font-bold text-5xl text-center">${data.price}</p>
      )}
      {data.perks.map((item: string | number, index: number) => (
        <div className="flex space-x-3 items-center" key={index}>
          <BsCheckCircleFill className="text-[#69c661]" size={30} />
          <p>{item}</p>
        </div>
      ))}
      <div className="flex justify-center">
        <Link
          href="/pricing/checkout"
          className="bg-black text-white font-bold py-3 px-10 rounded-lg hover:bg-primary text-lg transition ease-in-out hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
