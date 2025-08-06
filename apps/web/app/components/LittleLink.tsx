import React from "react";
import Link from "next/link";

interface LittleLinkProps {
  text: string;
  linkText: string;
  href: string;
  textColor: string;
  hoverText: string;
  mainTextColor: string;
}

const LittleLink: React.FC<LittleLinkProps> = ({
  text,
  linkText,
  href,
  mainTextColor,
  hoverText,
  textColor,
}) => {
  return (
    <p
      className="text-sm"
      style={{
        color: mainTextColor,
      }}
    >
      {text == "none" ? null : text}{" "}
      <Link
        href={href}
        className="font-medium transition-colors duration-200"
        style={{
          color: textColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = hoverText;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = textColor;
        }}
      >
        {linkText}
      </Link>
    </p>
  );
};

export default LittleLink;
