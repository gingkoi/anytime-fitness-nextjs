import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" lg:h-[670px] h-[550px] max-w-screen relative overflow-hidden">
      <div className="w-full lg:h-[700px] h-[550px] relative">
        <div className="absolute z-10 bg-black/70 top-0 left-0 right-0 bottom-0 w-full items-center flex flex-col justify-center font-poppin space-y-5">
          <h1 className="hidden lg:block text-white uppercase lg:text-7xl font-black break-all text-center">
            Anybody.Anywhere.Anytime.
          </h1>
          <h1 className="lg:hidden text-white uppercase text-5xl font-black break-all text-center">
            Anybody. <br /> Anywhere. <br /> Anytime.
          </h1>
          <h2 className="hidden lg:block text-white lg:text-6xl font-bold">
            Your health and Fitness Partner
          </h2>
          <h2 className="lg:hidden text-white text-3xl font-bold">
            Your health and <br /> Fitness Partner
          </h2>
          <div className="flex flex-col items-center font-poppin">
            <p className="text-white md:text-3xl text-xl font-bold my-3">
              Find your gym
            </p>
            <div className="bg-white flex py-3 px-5 rounded-md items-center justify-between focus:bg-primary my-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by Suburb, Town or City"
                className="grow focus:outline-none"
              />
              <a href="">
                <AiOutlineSearch size={20} />
              </a>
            </div>
            <p className="text-white lg:text-left text-center text-sm lg:text-lg">
              Search one of our 90 gyms in Singapore or one of our 5,128 gyms
              worldwide.
            </p>
          </div>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="/"
          fill
          className="md:h-[800px]"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
