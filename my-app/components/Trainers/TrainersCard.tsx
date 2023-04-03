import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrainersCard = ({
  name,
  role,
  url,
  alt,
}: {
  name: string;
  role: string;
  url: string;
  alt: string;
}) => {
  return (
    <Link href="trainers" className="group">
      <div className="bg-red-500 w-full h-[450px] relative overflow-hidden">
        <Image
          src={url}
          fill
          alt={alt}
          className="hover:scale-105 transition duration-300"
        />
      </div>
      <div className="my-3">
        <p className="group-hover:underline underline-offset-2 decoration-gray-600 text-gray-600 text-sm">
          {name}
        </p>
        <p className="font-medium">{role}</p>
      </div>
    </Link>
  );
};

export default TrainersCard;
