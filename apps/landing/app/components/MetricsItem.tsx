"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface MetricsProps {
  image: StaticImageData;
  number: string;
  description: string;
  alt: string;
  isFirst?: boolean;
}

const MetricsItem = ({
  image,
  number,
  description,
  alt,
  isFirst = false,
}: MetricsProps) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from string (e.g., "+120K" -> 120, "4.9" -> 4.9, "89+" -> 89)
  const extractNumber = (str: string) => {
    const match = str.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const targetNumber = extractNumber(number);
  const prefix = number.includes("+") && number.startsWith("+") ? "+" : "";
  const suffix = number.includes("K")
    ? "K"
    : number.includes("+") && !number.startsWith("+")
    ? "+"
    : "";
  const isDecimal = number.includes(".");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetNumber;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isInView, targetNumber]);

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.floor(num).toString();
  };

  return (
    <div
      ref={ref}
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 text-center md:text-left"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 mb-4">
        {/**Upper Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src={image}
            alt={alt}
            className={isFirst ? "" : "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"}
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bold font-manrope text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
        >
          {prefix}
          {formatNumber(count)}
          {suffix}
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="max-w-xs mx-auto md:mx-0 text-sm sm:text-base text-gray-600">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
export default MetricsItem;
