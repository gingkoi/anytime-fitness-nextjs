"use client";
import React, { useState } from "react";
import {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
} from "../../components/Classes/classesData";
import ClassesCard from "@/components/Classes/ClassesCard";

const Classes = () => {
  const [toggle, setToggle] = useState<number>(1);
  const handleToggle = (index: number) => {
    setToggle(index);
  };
  return (
    <div className="container mx-auto lg:py-16 pb-10 lg:h-[calc(100vh_-_0px)]">
      <div className=" grid lg:grid-cols-7 bg-black text-white">
        <div
          className={` group py-5 text-center cursor-pointer ${
            toggle === 1
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(1)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Monday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 2
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(2)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Tuesday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 3
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(3)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Wednesday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 4
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(4)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Thursday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 5
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(5)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Friday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 6
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(6)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Saturday
          </p>
        </div>
        <div
          className={`group py-5 text-center cursor-pointer ${
            toggle === 7
              ? "lg:border-b-8 border-b-4 border-primary"
              : "lg:border-white lg:border-x-2"
          }`}
          onClick={() => handleToggle(7)}
        >
          <p className="group-hover:text-primary font-bold text-xl uppercase">
            Sunday
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-10 mt-10 gap-10">
        {toggle === 1 && monday.length > 0
          ? monday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
        {toggle === 2 && tuesday.length > 0
          ? tuesday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
        {toggle === 3 && wednesday.length > 0
          ? wednesday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
        {toggle === 4 && thursday.length > 0
          ? thursday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
        {toggle === 5 && friday.length > 0
          ? friday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
        {toggle === 6 && saturday.length > 0
          ? saturday.map((item, index) => (
              <ClassesCard
                key={index}
                classLesson={item.class}
                startTime={item.timeStart}
                endTime={item.timeEnd}
                trainer={item.trainer}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Classes;
