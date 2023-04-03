import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({
  title,
  description,
  name,
}: {
  title: string;
  description: string;
  name: string;
}) => {
  return (
    <div className="p-10 text-left space-y-5 rounded-md bg-black flex flex-col justify-between">
      <h5 className="text-white font-bold md:text-3xl">{title}</h5>
      <p className="text-justify text-white md:text-base text-sm">{`"${description}"`}</p>
      <div className="flex items-center justify-between">
        <p className="text-white font-bold text-lg">{name}</p>
        <div className="flex">
          <AiFillStar size={30} className="text-primary" />
          <AiFillStar size={30} className="text-primary" />
          <AiFillStar size={30} className="text-primary" />
          <AiFillStar size={30} className="text-primary" />
          <AiFillStar size={30} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
