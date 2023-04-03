"use client";
import React from "react";
import {
  BsFillMortarboardFill,
  BsFillCpuFill,
  BsCreditCardFill,
  BsPersonPlusFill,
  BsStars,
  BsFillHouseFill,
} from "react-icons/bs";
import Link from "next/link";
import BenefitCard from "@/components/Benefits/BenefitCard";
import Form from "@/components/Benefits/Form";

const Benefits = () => {
  return (
    <div className="font-poppin animated_bg">
      <div className="max-w-screen lg:h-[690px] h-[600px] px-10 flex justify-center items-center">
        <div className="max-w-[700px]">
          <h1 className="lg:text-6xl text-4xl font-black">
            JOIN THE COLLECTIVE.
            <br />
            POWER YOUR PURSUIT.
          </h1>
          <p className="text-lg my-5">
            Stream live and on-demand classes from the unrivaled collective, and
            be transported to the front row of className—wherever you are,
            whenever you’re ready. Unlimited access is included with your Fit
            membership.
          </p>
          <Link
            href="/pricing"
            className="bg-black text-white py-3 px-10 text-lg rounded-md hover:bg-transparent hover:outline hover:outline-black hover:text-black transition ease-in hover:font-bold"
          >
            Join us
          </Link>
        </div>
      </div>
      <div className="max-w-screen h-auto flex flex-col items-center">
        <div className="max-w-[650px] text-center px-5">
          <h2 className="lg:text-4xl text-2xl font-black">
            MEMBERSHIP WITH BENEFITS
          </h2>
          <p className="my-5">
            Fit is available however, whenever, and wherever you want it with
            seamlessly integrated physical and digital offerings. Explore the
            benefits you get with a Fit membership below.
          </p>
        </div>
      </div>
      <div className="max-w-screen grid lg:grid-cols-3 gap-10 px-8 my-10">
        <div className="flex gap-5">
          <div>
            <BsFillMortarboardFill
              size={50}
              className="text-white bg-black p-3 rounded-xl"
            />
          </div>
          <BenefitCard
            title={"UNLIMITED CLASSES"}
            description={
              "Master of One. Choreo Cult. Anthem. All classes at FIT are created and developed by the industry&apos;s best minds and taught by talented fitness instructors who test your limits and inspire results. Every class is booked in advance and complimentary to you as a member. Claim your exclusive offer and try a className at FIT."
            }
          />
        </div>
        <div className="flex gap-5">
          <div>
            <BsCreditCardFill
              size={50}
              className="text-white bg-black p-3 rounded-xl"
            />
          </div>
          <BenefitCard
            title={"DIVERSIFY YOUR FITNESS"}
            description={
              "Put your Fit membership on your American Express Platinum Card® and you'll get up to $300 back per year. Applicable on any Fit membership and the Fit+ digital fitness app. Terms apply."
            }
          />
        </div>
        <div className="flex gap-5">
          <div>
            <BsFillCpuFill
              size={50}
              className="text-white bg-black p-3 rounded-xl"
            />
          </div>
          <BenefitCard
            title={"INDUSTRY-BEST PROGRAMMING"}
            description={
              "Meet your goals anywhere with our expert instruction and top-tier fitness programs—in the club on our groundbreaking digital platforms. Claim your exclusive offer and experience our industry-best programming."
            }
          />
        </div>
        <div className="flex gap-5">
          <div>
            <BsStars size={50} className="text-white bg-black p-3 rounded-xl" />
          </div>
          <BenefitCard
            title={"THE SPA AT FIT"}
            description={
              "Take time to regenerate and elevate your performance with our always-evolving roster of health Spa services."
            }
          />
        </div>
        <div className="flex gap-5">
          <div>
            <BsPersonPlusFill
              size={50}
              className="text-white bg-black p-3 rounded-xl"
            />
          </div>
          <BenefitCard
            title={"PERSONAL TRAINING AT FIT"}
            description={
              "You and your dedicated personal trainer will create a plan that's tailored to you goals - and together, you'll work to unlock the results you want. At every step of the way, you'll be driven by a passionate trainer using the latest science during in-club sessions and at home with your Virtual Personal Training."
            }
          />
        </div>
        <div className="flex gap-5">
          <div>
            <BsFillHouseFill
              size={50}
              className="text-white bg-black p-3 rounded-xl"
            />
          </div>
          <BenefitCard
            title={"THE CLUB"}
            description={
              "Built for the ultimate in high-performance living, our clubs combine personalized service and signature programming for an unparalleled fitness experience. From the world’s best group fitness and personal training to a performance recovery-driven spa. This ethos infuses Fit Clubs at our Fit Hotels, each one an exceptional new flagship."
            }
          />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Benefits;
