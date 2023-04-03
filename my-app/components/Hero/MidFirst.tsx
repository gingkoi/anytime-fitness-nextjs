import React from "react";
import Link from "next/link";

const MidFirst = () => {
  return (
    <div className="max-w-screen lg:h-[480px] h-[350px] flex justify-center items-center px-5 animated_bg">
      <div className="font-poppin font-black">
        <h3 className="text-center lg:text-6xl text-3xl">
          REINVENT <br />
          YOUR LIFE WITH FITNESS
        </h3>
        <p className="text-center lg:text-xl">
          YOUR LIFE WITH ANYTIME FITNESS. VOTED BEST GYM EVERY YEAR
        </p>
        <div className="flex justify-center my-5">
          <Link
            href="/pricing"
            className="text-center text-white bg-black py-4 px-10 rounded-md text-xl hover:bg-primary transition ease-in"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidFirst;
