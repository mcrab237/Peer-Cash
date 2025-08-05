"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface MetricsProps {
  image: StaticImageData;
  number: string;
  description: string;
  alt: string;
}

const MetricsItem = ({ image, number, description, alt }: MetricsProps) => {
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
    <div ref={ref} className="px-12 py-10">
      <div className="flex max-md:justify-center items-center gap-3">
        {/**Upper Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <Image src={image} alt={alt} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bold font-manrope text-3xl"
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
        <p className="md:max-w-xs mt-4 text-gray-600 max-md:text-center">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
export default MetricsItem;
