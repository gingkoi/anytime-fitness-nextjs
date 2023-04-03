"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/LOGO.png";
import Link from "next/link";
import GuestMdoal from "../Modal/GuestMdoal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative h-full">
      <div className="bg-black flex justify-between px-5 lg:justify-around py-5 items-center font-poppin gap-4">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} width={170} height={100} alt="anytime-fitness" />
        </Link>
        <div className="hidden lg:flex space-x-5 text-md ml-[100px] text-white">
          <Link href="/benefits" className="font-semibold hover:text-primary">
            Benefits
          </Link>
          <Link href="/classes" className="font-semibold hover:text-primary">
            Class Schedule
          </Link>
          <Link href="/locations" className="font-semibold hover:text-primary">
            Locations
          </Link>
          <Link href="/trainers" className="font-semibold hover:text-primary">
            Trainers
          </Link>
        </div>
        <div className="hidden space-x-3 lg:flex">
          <GuestMdoal />
          <Link
            href="/pricing"
            className="text-white bg-primary py-3 px-5 font-semibold rounded-lg hover:scale-105 ease-in transition"
          >
            Join online
          </Link>
        </div>
        {nav ? (
          <div className="bg-[#f3f4f6] p-2 rounded-md lg:hidden">
            <AiOutlineClose
              size={25}
              className="text-text "
              onClick={handleNav}
            />
          </div>
        ) : (
          <div className="bg-[#f3f4f6] p-2 rounded-md lg:hidden">
            <RxHamburgerMenu
              size={25}
              className="text-text "
              onClick={handleNav}
            />
          </div>
        )}
      </div>
      <div
        className={`${
          nav
            ? "flex w-screen h-full justify-around flex-col font-poppin transition duration-200 lg:hidden bg-black border-b-8 border-primary"
            : "hidden "
        }`}
      >
        <Link href="benefits" className="text-white font-semibold text-xl p-3">
          Benefits
        </Link>
        <Link href="/classes" className="text-white font-semibold text-xl p-3">
          Class Schedule
        </Link>
        <Link
          href="/locations"
          className="text-white font-semibold text-xl p-3"
        >
          Locations
        </Link>
        <Link href="/trainers" className="text-white font-semibold text-xl p-3">
          Trainers
        </Link>
        <Link
          href="/pricing"
          className="text-xl p-3 bg-primary text-white font-semibold"
        >
          Join Online
        </Link>
        <GuestMdoal />
      </div>
    </div>
  );
};

export default Navbar;
