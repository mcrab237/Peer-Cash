"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqProp {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FaqProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-y border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="font-medium text-lg text-gray-900 pr-8">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <FaMinus className="text-gray-900 w-4 h-4" />
          ) : (
            <FaPlus className="text-gray-900 w-4 h-4" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
