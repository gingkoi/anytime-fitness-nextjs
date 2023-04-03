"use client";
import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { AiFillAlipayCircle, AiFillAmazonCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const initialValues: {
    firstName: string;
    lastName: string;
    email: string;
    zipcode: string;
    phoneNumber: string;
  } = {
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState<any>(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {}, [formErrors]);
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!values.zipcode) {
      errors.zipcode = "Zipcode is required";
    }

    return errors;
  };

  const notify = () =>
    toast("Please check your email to confirm membership", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  Object.keys(formErrors).length === 0 && isSubmit ? notify() : null;
  return (
    <div className="max-w-[1200px] h-auto mx-auto flex justify-center gap-20 py-16 px-10">
      <div className="w-[700px] h-auto relative overflow-hidden lg:block hidden">
        <Image
          src="https://images.pexels.com/photos/13106582/pexels-photo-13106582.jpeg"
          fill
          alt="Woman working out"
        />
      </div>

      <div>
        <div>
          <h1 className="text-2xl text-center font-bold px-8 mb-3">
            Express checkout
          </h1>
          <div className="grid grid-cols-4 gap-5">
            <div className="bg-white border rounded-xl py-5 px-3 flex flex-col lg:flex-row items-center cursor-pointer shadow-lg justify-center hover:scale-[110%] transition">
              <FcGoogle size={30} />
              <p className="text-xl">Pay</p>
            </div>
            <div className="bg-black border rounded-xl py-5 px-3 flex flex-col lg:flex-row items-center cursor-pointer shadow-lg justify-center hover:scale-[110%] transition">
              <BsApple size={27} className="text-white" />
              <p className="text-xl text-white">Pay</p>
            </div>
            <div className="bg-[#3298dd] border rounded-xl py-5 px-3 flex flex-col lg:flex-row items-center cursor-pointer shadow-lg justify-center hover:scale-[110%] transition">
              <AiFillAlipayCircle size={27} className="text-white" />
              <p className="text-xl text-white">Pay</p>
            </div>
            <div className="bg-[#303b44] border rounded-xl py-5 px-3 flex flex-col lg:flex-row items-center cursor-pointer shadow-lg justify-center hover:scale-[110%] transition">
              <AiFillAmazonCircle size={27} className="text-[#e69131]" />
              <p className="text-xl text-white">Pay</p>
            </div>
          </div>
          <div className="flex justify-around items-center py-10 w-full">
            <div className="bg-gray-300 h-[3px] rounded-full w-[20%]" />
            <p className="uppercase w-full text-center text-gray-600">
              Or continue below to pay with credit card
            </p>
            <div className="bg-gray-300 h-[3px] rounded-full w-[20%]" />
          </div>
        </div>

        <h1 className="text-2xl text-center font-bold px-8 mb-3">
          Review & Confirm Membership
        </h1>
        <form
          action=""
          className="grid grid-cols-2 gap-3"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 col-span-2">
            <p className=" text-lg">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              className="border border-black w-full rounded-md py-3 px-5"
              name="firstName"
              onChange={handleChange}
            />
            <p className="grid col-span-2 text-sm text-[#ff5347]">
              {formErrors.firstName}
            </p>
          </div>
          <div className="space-y-1 col-span-2">
            <p className=" text-lg">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-black w-full rounded-md py-3 px-5"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <p className="grid col-span-2 text-sm text-[#ff5347]">
              {formErrors.lastName}
            </p>
          </div>
          <div className="space-y-1 col-span-2 lg:col-span-1">
            <p className=" text-lg">Zip Code</p>
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-black w-full rounded-md py-3 px-5 "
              name="zipcode"
              value={formValues.zipcode}
              onChange={handleChange}
            />
            <p className="grid col-span-2 text-sm text-[#ff5347]">
              {formErrors.zipcode}
            </p>
          </div>
          <div className="space-y-1 col-span-2 lg:col-span-1">
            <p className=" text-lg">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-black w-full rounded-md py-3 px-5"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
            <p className="grid col-span-2 text-sm text-[#ff5347]">
              {formErrors.phoneNumber}
            </p>
          </div>
          <div className="space-y-1 col-span-2">
            <p className=" text-lg">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="border border-black w-full rounded-md py-3 px-5"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="grid col-span-2 text-sm text-[#ff5347]">
              {formErrors.email}
            </p>
          </div>
          <input
            className="bg-black text-white col-span-2 py-5 rounded-xl text-lg font-medium hover:bg-primary transition duration-600 my-5 cursor-pointer"
            value="Checkout"
            type="submit"
          />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
        <div className="bg-gray-300 h-[3px] rounded-full" />
        <p className="text-center text-primary my-5 cursor-pointer hover:underline">
          Having trouble? <br />
          Contact customer support
        </p>
      </div>
    </div>
  );
};

export default Checkout;
