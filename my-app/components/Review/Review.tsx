import React from "react";
import data from "./reviewData";
import Image from "next/image";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="max-w-screen mx-auto py-20 px-5 animated_bg">
      <div className="max-w-[1600px] mx-auto text-center font-poppin">
        <h4 className="text-3xl lg:text-5xl font-bold py-5">
          Read trusted reviews from our customers
        </h4>
        <div className="max-w-[700px] mx-auto px-10">
          <p className="text-gray-700 text-sm lg:text-lg">
            Founded in Southern California in 1984, Fit continues to seek
            innovative ways to enhance the physical and emotional well-being of
            our increasingly diverse membership base. Today, our
            state-of-the-art clubs span the continent, and we’re still
            expanding. Our strong and successful growth stems from our
            commitment to understanding and meeting the distinct needs of each
            community we serve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 mb-16 gap-5">
          {data.map((item, index) => (
            <ReviewCard
              key={index}
              name={item.name}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="lg:py-10 space-y-10">
            <h4 className="text-left text-4xl font-bold">OUR PHILOSOPHY</h4>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-x-10">
              <Image
                src="https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={500}
                height={300}
                alt="/"
              />
              <div className="text-justify text-gray-600">
                <p>
                  Our mission is to create a culture that fosters complete
                  wellness and offers an all-encompassing member experience. We
                  set the bar when it comes to personal training, group fitness,
                  club facilities, social events and more.
                </p>
                <p className="md:my-10 mt-5">
                  With an extraordinary oasis atmosphere, a culture that fosters
                  and encourages complete wellness, and all of the tools and
                  training you need to see incredible results - there’s no
                  wonder Fit has been voted “Best Gym” every year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
