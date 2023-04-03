import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import data from "../Pricing/priceData";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="uppercase bg-white text-primary font-bold py-2 px-5 rounded-md hover:scale-105 transition ease-in cursor-pointer"
      >
        Shop Now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[60] overflow-y-auto backdrop-blur-none bg-black/70"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <AiFillCloseCircle
                  onClick={closeModal}
                  size={30}
                  className="right-1 top-1 absolute cursor-pointer"
                />
                <div className="mt-2">
                  <div className="bg-white p-8 rounded-lg space-y-7 border-2">
                    <p className="font-bold text-3xl text-center">
                      {data[0].membership}
                    </p>
                    <p className="text-center text-gray-600">
                      No enrollment fees.
                    </p>
                    {data[0].price > 120 ? (
                      <p className="font-bold text-5xl text-center">
                        ${data[0].price}
                        <span className="font-normal text-xl text-gray-600">
                          /Monthly
                        </span>
                      </p>
                    ) : (
                      <p className="font-bold text-5xl text-center">
                        ${data[0].price}
                      </p>
                    )}
                    {data[0].perks.map(
                      (item: string | number, index: number) => (
                        <div
                          className="flex space-x-3 items-center"
                          key={index}
                        >
                          <BsCheckCircleFill
                            className="text-[#69c661]"
                            size={30}
                          />
                          <p>{item}</p>
                        </div>
                      )
                    )}
                    <div className="flex justify-center">
                      <Link
                        href="/pricing/checkout"
                        className="bg-black text-white font-bold py-3 px-10 rounded-lg hover:bg-primary text-lg transition ease-in-out hover:scale-105"
                        onClick={closeModal}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4"></div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
