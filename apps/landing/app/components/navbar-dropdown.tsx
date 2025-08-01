"use client";

import React from "react";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface DropdownProps {
  name: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown = ({ name, items, isOpen, onToggle }: DropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        {name}
        <span>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
