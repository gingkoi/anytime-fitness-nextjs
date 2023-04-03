import React from "react";
import Image from "next/image";
import logo from "../../public/LOGO.png";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black text-white lg:pt-24 lg:pb-10 p-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <Link href="/">
            <Image src={logo} width={170} height={100} alt="anytime-fitness" />
          </Link>
          <p className="text-4xl font-medium text-center lg:text-left mt-5 lg:mt-0">
            A Lifestyle Gym.
          </p>
        </div>
        <div className="bg-white h-[0.1rem] my-14" />
        <div className="flex flex-col lg:flex-row justify-between lg:gap-16">
          <div className="grid grid-cols-2 gap-16 lg:gap-8 lg:grid-cols-4 grow">
            <div>
              <h5 className="font-bold text-xl">About Us</h5>
              <div className="flex flex-col space-y-5 text-sm mt-8">
                <Link href="/" className="hover:text-primary">
                  Company History
                </Link>
                <Link href="/" className="hover:text-primary">
                  Meet the Team
                </Link>
                <Link href="/" className="hover:text-primary">
                  Employee Handbook
                </Link>
                <Link href="/" className="hover:text-primary">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl">Our Services</h5>
              <div className="flex flex-col space-y-5 text-sm mt-8">
                <Link href="/" className="hover:text-primary">
                  Web Development
                </Link>
                <Link href="/" className="hover:text-primary">
                  Web Design
                </Link>
                <Link href="/" className="hover:text-primary">
                  Marketing
                </Link>
                <Link href="/" className="hover:text-primary">
                  Google Ads
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl">Resources</h5>
              <div className="flex flex-col space-y-5 text-sm mt-8">
                <Link href="/" className="hover:text-primary">
                  Online Guide
                </Link>
                <Link href="/" className="hover:text-primary">
                  Conference Notes
                </Link>
                <Link href="/" className="hover:text-primary">
                  Forum
                </Link>
                <Link href="/" className="hover:text-primary">
                  Downloads
                </Link>
                <Link href="/" className="hover:text-primary">
                  Upcoming Events
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl">Helpful Links</h5>
              <div className="flex flex-col space-y-5 text-sm mt-8">
                <Link href="/" className="hover:text-primary">
                  FAQs
                </Link>
                <Link href="/" className="hover:text-primary">
                  Support
                </Link>
                <div className="w-auto relative">
                  <span className="absolute flex h-2 w-2 lg:top-[-20%] top-[-30%] lg:left-[30%] left-[43%]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <Link href="/" className="hover:text-primary">
                    Live Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-start mt-10 lg:mt-0">
            <p className="font-bold text-xl text-center lg:text-left">
              Stay in Touch
            </p>
            <p className="mt-8 text-center lg:text-left">
              Want us to email you with the latest news?
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full py-3 px-5 text-black focus:outline-primary focus:outline-2 focus:outline-offset-0 my-5 w-full"
            />
            <Link
              href="/pricing"
              className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:opacity-90"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="bg-white h-[0.1rem] mt-14 mb-8" />
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0">
          <p>Copyright © 2022. All rights reserved.</p>
          <div className="flex space-x-5">
            <Link href="/">
              <AiFillFacebook size={30} className="cursor-pointer" />
            </Link>
            <Link href="/">
              <AiFillInstagram size={30} className="cursor-pointer" />
            </Link>
            <Link href="/">
              <AiOutlineTwitter size={30} className="cursor-pointer" />
            </Link>
            <Link href="/">
              <AiFillGithub size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
