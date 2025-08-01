"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./navbar-dropdown";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const resourcesItems = [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "API Reference", href: "/resources/api" },
    { label: "Tutorials", href: "/resources/tutorials" },
    { label: "Blog", href: "/resources/blog" },
  ];

  const solutionsItems = [
    { label: "Enterprise", href: "/solutions/enterprise" },
    { label: "Small Business", href: "/solutions/small-business" },
    { label: "Startups", href: "/solutions/startups" },
    { label: "Developers", href: "/solutions/developers" },
  ];

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className="text-xl font-semibold text-gray-900">PeerCash</span>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="about-us">About Us</Link>
        <Dropdown
          name="Resources"
          items={resourcesItems}
          isOpen={openDropdown === "Resources"}
          onToggle={() => handleDropdownToggle("Resources")}
        />
        <Dropdown
          name="Solutions"
          items={solutionsItems}
          isOpen={openDropdown === "Solutions"}
          onToggle={() => handleDropdownToggle("Solutions")}
        />
        <Link href="contact-us">Pricing</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link className="bg-white text-black px-4 py-1 border-1 border-gray-300 rounded-lg" href="login">
          Log in
        </Link>
        <Link className="bg-gray-900 text-white px-4 py-1 rounded-lg" href="signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
