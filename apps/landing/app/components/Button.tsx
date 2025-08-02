"use client";
import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  textColor: string;
}

const Button = ({ text, color = "#3B82F6", textColor }: ButtonProps) => {
  return (
    <button
      className="px-6 py-3 rounded-4xl shadow-2xl"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
};
export default Button;
