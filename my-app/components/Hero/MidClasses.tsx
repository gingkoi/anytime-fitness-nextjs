import React from "react";
import MidClass from "./MidClass";

const MidClasses = () => {
  return (
    <div className="grid md:grid-cols-2 font-poppin">
      <MidClass
        facility={"Fit Prex"}
        description={"Let your membership pay for itself"}
        button={"View Our Benefits"}
        url={
          "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"person Standing on a Cube"}
        link="/benefits"
      />
      <MidClass
        facility={"Premium Fitness Classes"}
        description={
          "For the member who wants it all. Our diverse group classes offer high-intensity, full-body, motivational workouts."
        }
        button={"View Class Schedule"}
        url={
          "https://images.pexels.com/photos/3912366/pexels-photo-3912366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"person Standing on a Cube"}
        link="/classes"
      />
      <MidClass
        facility={"High-End Clubs, Equipment & Amenities"}
        description={"Built to inspire"}
        button={"Find Your Location"}
        url={
          "https://www.lifefitness.com/resource/blob/1702588/3836aac8bf0851770b849d9d82a0b7e8/hr-1147-fvdb-20200306-2048px-data.png"
        }
        alt={"person Standing on a Cube"}
        link="/locations"
      />
      <MidClass
        facility={"Results-Driven Personal Training"}
        description={
          "Our world class personal trainers use our fiver pillars of health + fitness to help you assess, plan + achieve."
        }
        button={"Meet Our Trainers"}
        url={
          "https://images.pexels.com/photos/4164658/pexels-photo-4164658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"person Standing on a Cube"}
        link="/trainers"
      />
    </div>
  );
};

export default MidClasses;
