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
  const closeNav = () => {
    setNav(false);
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
            ? "flex w-screen h-screen flex-col justify-center  font-poppin lg:hidden bg-black border-b-8 border-primary fixed top-0 left-0 right-0 bottom-0 z-[60]"
            : "hidden "
        }`}
      >
        <AiOutlineClose
          size={40}
          className="text-white absolute top-[2%] right-[2%]"
          onClick={handleNav}
        />
        <div className="flex flex-col space-y-8 items-center justify-center">
          <Link
            href="benefits"
            className="text-white font-semibold text-3xl"
            onClick={closeNav}
          >
            Benefits
          </Link>
          <Link
            href="/classes"
            className="text-white font-semibold text-3xl"
            onClick={closeNav}
          >
            Class Schedule
          </Link>
          <Link
            href="/locations"
            className="text-white font-semibold text-3xl"
            onClick={closeNav}
          >
            Locations
          </Link>
          <Link
            href="/trainers"
            className="text-white font-semibold text-3xl"
            onClick={closeNav}
          >
            Trainers
          </Link>
          <Link
            href="/pricing"
            className="text-2xl px-5 py-2 bg-primary text-white font-semibold rounded-2xl"
            onClick={closeNav}
          >
            Join Online
          </Link>
          <GuestMdoal />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
