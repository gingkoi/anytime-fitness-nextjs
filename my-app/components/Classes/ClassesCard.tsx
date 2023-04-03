import React from "react";
import Link from "next/link";
import { AiFillRightCircle } from "react-icons/ai";

const ClassesCard = ({
  classLesson,
  startTime,
  endTime,
  trainer,
}: {
  classLesson: string;
  startTime: string;
  endTime: string;
  trainer: string;
}) => {
  return (
    <Link href="/pricing">
      <div className="bg-white hover:text-white p-10 rounded-md shadow-xl hover:bg-black group cursor-pointer transition border">
        <div>
          <p className="lg:text-6xl text-3xl font-bold">{classLesson}</p>
          <div className="bg-black group-hover:bg-white my-5" />
          <p className="text-xl font-medium">
            Time: {startTime} - {endTime}
          </p>
          <p className="text-lg font-medium">Trainer: {trainer}</p>
        </div>
        <div
          className="mt-10 py-3 px-5 font-medium text-lg text-black group-hover:text-white flex
          items-center lg:max-w-[26%] max-w-[70%] rounded-md"
        >
          Join now
          <AiFillRightCircle
            size={25}
            className="ml-2 group-hover:translate-x-2 duration-300 group-hover:text-primary"
          />
        </div>
      </div>
    </Link>
  );
};

export default ClassesCard;
