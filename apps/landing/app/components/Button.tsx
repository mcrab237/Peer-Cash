"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  color?: string;
  textColor: string;
}

const Button = ({ text, color = "#3B82F6", textColor }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="px-6 py-3 rounded-4xl font-manrope shadow-2xl"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {text}
    </motion.button>
  );
};
export default Button;
