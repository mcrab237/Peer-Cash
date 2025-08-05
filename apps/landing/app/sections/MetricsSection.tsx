import React from "react";
import MetricsItem from "../components/MetricsItem";
import people from "../../public/people.png";
import star from "../../public/star.png";
import locator from "../../public/location.png";

const Items = [
  {
    image: people,
    number: "+120K",
    description: "Our platform is a trusted choice for money transfers.",
    alt: "people image",
  },
  {
    image: star,
    number: "4.9",
    description:
      "Our high rating proves our platform’s quality and positive global user impact.",
    alt: "star image",
  },
  {
    image: locator,
    number: "89+",
    description:
      "Our global presence ensures reliable, efficient financial solutions.",
    alt: "location image",
  },
];

const MetricsSection = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
        {Items.map((item, index) => (
          <MetricsItem
            key={index}
            image={item.image}
            number={item.number}
            description={item.description}
            alt={item.alt}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
