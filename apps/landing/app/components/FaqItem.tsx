"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Global state to track which FAQ is open
let openFaqId: string | null = null;
const faqListeners: Set<(id: string | null) => void> = new Set();

const notifyFaqChange = (id: string | null) => {
  openFaqId = id;
  faqListeners.forEach(listener => listener(id));
};

interface FaqProp {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FaqProp) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const faqId = useRef(Math.random().toString(36).substr(2, 9));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = (currentOpenId: string | null) => {
      setIsOpen(currentOpenId === faqId.current);
    };
    
    faqListeners.add(listener);
    
    return () => {
      faqListeners.delete(listener);
    };
  }, []);

  const handleToggle = () => {
    if (isOpen) {
      notifyFaqChange(null);
    } else {
      notifyFaqChange(faqId.current);
    }
  };

  return (
    <div className="border-y border-gray-200">
      <button 
        onClick={handleToggle} 
        className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="font-semibold font-manrope text-lg text-gray-900 pr-8">{question}</h3>
        <div className="flex-shrink-0">
          <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            {isOpen ? (
              <FaMinus className="text-gray-900 w-4 h-4" />
            ) : (
              <FaPlus className="text-gray-900 w-4 h-4" />
            )}
          </div>
        </div>
      </button>
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
      >
        <div className="pb-6 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
