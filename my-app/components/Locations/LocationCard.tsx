import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const LocationCard = ({
  location,
  state,
  rating,
  url,
}: {
  location: string;
  state: string;
  rating: number;
  url: string;
}) => {
  return (
    <Link href="pricing">
      <div className="w-[340px] lg:w-[380px] h-[220px] relative lg:my-[120px] my-[10px] group font-poppin">
        <div className="text-white z-30 absolute bottom-[7%] left-[5%]">
          <p className="font-bold text-2xl">{location}</p>
          <p className="text-sm">{state}</p>
        </div>
        <div className="text-white z-30 absolute top-[7%] right-[5%] flex items-center bg-black px-3 py-1 rounded-md">
          <p className="font-bold text-base mr-1">{rating}</p>
          <AiFillStar size={18} className="text-[#fde047]" />
        </div>
        <div className="bg-black/50 absolute z-10 top-0 right-0 left-0 bottom-0 rounded-lg group-hover:bg-black/20 transition" />
        <Image src={url} fill alt="/" className="rounded-lg" />
      </div>
    </Link>
  );
};

export default LocationCard;
