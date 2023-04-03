import React from "react";
import Link from "next/link";
import Image from "next/image";

const JoinCommunity = () => {
  return (
    <div className="lg:max-w-screen lg:h-[400px] h-[200px] flex overflow-hidden relative">
      <div className="absolute z-[30] top-0 text-white flex flex-col justify-center items-center h-full w-full">
        <p className="font-bold lg:text-5xl text-3xl text-center">
          Join Our Community
        </p>
        <p className="font-light text-sm lg:text-lg text-center">
          There Is No Better Time Than Now
        </p>
        <Link
          href="pricing"
          className="bg-[#67c15b] font-bold py-3 px-7 rounded-full lg:text-xl mt-5 hover:bg-black hover:text-[#67c15b] transition duration-300"
        >
          Join Online
        </Link>
      </div>
      <div className="bg-black/50 absolute z-10 top-0 bottom-0 right-0 left-0" />
      <div className="grow relative">
        <Image
          src="https://images.pexels.com/photos/9945075/pexels-photo-9945075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="/"
        />
      </div>
      <div className="grow relative">
        <Image
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="/"
        />
      </div>
      <div className="grow relative">
        <Image
          src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="/"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
