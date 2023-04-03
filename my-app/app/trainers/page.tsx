"use client";
import React, { useState } from "react";
import data from "../../components/Trainers/trainersData";
import TrainersCard from "@/components/Trainers/TrainersCard";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Image from "next/image";

const Trainers = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };
  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };
  return (
    <div className="container mx-auto lg:py-16 py-10 px-5">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <div className="bg-black text-white flex flex-col justify-center items-center lg:p-20 p-10 text-center space-y-5">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Meet Our Training Staff
          </h1>
          <p>
            Working one-on-one creates an atmosphere of accountability between
            you and your personal trainer. Fit personal trainers are very
            serious about designing your individual workout program based on
            your fitness assessment and goals.
          </p>
          <p>
            They take time to listen to you and understand your needs before
            your sessions begin. Our trainers are experts at pushing you to your
            limit so you can reach your optimal fitness level in a healthy
            amount of time.
          </p>
        </div>
        <div className="relative md:h-[250px] h-[200px] lg:h-auto">
          <Image
            src="https://images.pexels.com/photos/7991632/pexels-photo-7991632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="/"
          />
        </div>
      </div>
      <div className="my-10">
        <div className="my-5">
          <h2 className="font-bold text-3xl">Trainers</h2>
          <p className="text-gray-600">
            Powered by positive energy, driven by member results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, index) => (
            <TrainersCard
              name={item.name}
              role={item.role}
              url={item.picutre}
              alt={item.alt}
              key={index}
            />
          ))}
        </div>
        <div className="my-10">
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        </div>
        <div className="grid">
          <div
            className="flex items-center justify-between bg-black text-white p-8 border-y-2 border-white cursor-pointer"
            onClick={handleToggle}
          >
            <p className="font-bold text-lg">
              What exactly does a personal trainer do?
            </p>
            {toggle ? (
              <AiOutlineCaretUp className="text-white" size={30} />
            ) : (
              <AiOutlineCaretDown className="text-white" size={30} />
            )}
          </div>
          {toggle ? (
            <div className="space-y-5 py-8 px-3 text-gray-700">
              <p>
                If you’ve never hired a personal trainer before, you may be
                unsure as to what exactly their responsibilities would be.
                Essentially, a personal training professional is someone who
                strives to help clients achieve their fitness goals, which may
                include everything from weight loss and strength training to
                general health management.
              </p>
              <p>
                If you’re looking for expertise-based personal training in Los
                Angeles, Fit Athletic is a great choice. Our team is made up of
                experienced trainers who are fully committed to helping you
                reach your goals and strengthen your health through customized
                exercise and personalized advice.
              </p>
            </div>
          ) : null}
          <div
            className="flex items-center justify-between bg-black text-white p-8 border-y-2 border-white cursor-pointer"
            onClick={handleToggle2}
          >
            <p className="font-bold text-lg">
              What should I expect from my first personal training session?
            </p>
            {toggle2 ? (
              <AiOutlineCaretUp className="text-white" size={30} />
            ) : (
              <AiOutlineCaretDown className="text-white" size={30} />
            )}
          </div>
          {toggle2 ? (
            <div className="space-y-5 py-8 px-3 text-gray-700">
              <p>
                Your first personal training session is an opportunity to get to
                know your trainer and decide if they are the right fit for you.
                Additionally, your personal trainer will use this chance to
                perform a number of initial fitness assessments that will help
                you track your progress as well as discuss your needs and
                long-term goals with you.
              </p>
              <p>
                Although the first part of your session will mostly focus on
                talking and paperwork, your Los Angeles personal trainer will
                probably make you sweat a bit in the second half. They’ll most
                likely have you do some basic exercises such as lunges, squats
                or kettlebell swings, just to assess your current fitness level
                and tailor your workout routine accordingly. They’ll also ask
                you about any injuries you might have had, or other medical
                conditions.
              </p>
            </div>
          ) : null}
          <div
            className="flex items-center justify-between bg-black text-white p-8 border-y-2 border-white cursor-pointer"
            onClick={handleToggle3}
          >
            <p className="font-bold text-lg">
              How can I find a perosnal trainer in Los Angeles & beyond?
            </p>
            {toggle3 ? (
              <AiOutlineCaretUp className="text-white" size={30} />
            ) : (
              <AiOutlineCaretDown className="text-white" size={30} />
            )}
          </div>
          {toggle3 ? (
            <div className="space-y-5 py-8 px-3 text-gray-700">
              <p>
                Looking for personal training experts in Los Angeles, CA? Fit
                Athletic is a luxury lifestyle and fitness club that offers a
                wide range of training options and works hard to encourage
                healthy living and complete wellness.
              </p>
              <p>
                Whether you decide to visit our cutting edge gym in East
                Village, Downtown Los Angeles or any other of our facilities,
                you’ll get to enjoy personalized fitness advice and a club-like
                atmosphere. What's more, we also offer fantastic virtual
                training programs that enable you to work with your trainer
                online and track your progress through our app. Reach out to Fit
                today!
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
