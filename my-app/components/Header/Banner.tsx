"use client";
import React from "react";
import ShopModal from "../Modal/ShopModal";

const Banner = () => {
  return (
    <div>
      <div className="font-poppin bg-primary flex flex-col md:flex-row md:justify-between justify-center p-5 items-center">
        <p className="text-white text-md font-bold text-center mb-3 md:mb-0">
          Special Offer 🔥 10 Day All Club Access Membership with $0 Enrollment
          Fees
        </p>
        <ShopModal />
      </div>
    </div>
  );
};

export default Banner;
