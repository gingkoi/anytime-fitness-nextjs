import React from "react";

const BenefitCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h3 className="font-bold uppercase text-xl">{title}</h3>
      <p className="my-2 text-base">{description}</p>
    </div>
  );
};

export default BenefitCard;
