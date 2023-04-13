import React from "react";
import Link from "next/link";
import { AiFillRightCircle } from "react-icons/ai";
import Image from "next/image";

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
  const picture = {
    cycling:
      "https://images.pexels.com/photos/8766382/pexels-photo-8766382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fitness:
      "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    running:
      "https://images.pexels.com/photos/4944978/pexels-photo-4944978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    boxing:
      "https://images.pexels.com/photos/3761725/pexels-photo-3761725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    yoga: "https://images.pexels.com/photos/8436611/pexels-photo-8436611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    crossfit:
      "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bodybuilding:
      "https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    basketball:
      "https://images.pexels.com/photos/2874724/pexels-photo-2874724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  return (
    <Link href="/pricing">
      <div className="bg-white hover:text-white p-10 rounded-2xl shadow-xl hover:bg-black group cursor-pointer transition border relative">
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
        <div className="h-full w-[30%] absolute top-0 right-[0%] rounded-r-2xl">
          {classLesson === "Cycling" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.cycling}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Boxing" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.boxing}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Bodybuilding" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.bodybuilding}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Running" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.running}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Yoga" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.yoga}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Fitness" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.fitness}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Crossfit" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.crossfit}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
          {classLesson === "Basketball" && (
            <div>
              <div className="bg-black/60 absolute top-0 right-0 left-0 bottom-0 z-10 rounded-r-2xl group-hover:bg-black/20 duration-300" />
              <Image
                src={picture.basketball}
                alt=""
                fill
                className="absolute rounded-r-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ClassesCard;
