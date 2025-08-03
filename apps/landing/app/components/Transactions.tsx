import Image, { StaticImageData } from "next/image";
import React from "react";

interface TransactionsProps {
  logo: StaticImageData;
  company: string;
  summary: string;
  amount: number;
  currency: string;
  alt: string;
}

const Transactions = ({
  logo,
  company,
  summary,
  amount,
  currency,
  alt,
}: TransactionsProps) => {
  return (
    <div className="flex bg-white p-4 mb-4 items-center justify-between rounded-2xl w-full">
      <div className="flex items-center">
        <div className="bg-[#F1F5F9] p-3 rounded-2xl mr-4 w-12 h-12 flex items-center justify-center">
          <Image
            src={logo}
            alt={alt}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500">{summary}</p>
        </div>
      </div>
      <div className="font-semibold text-gray-900">
        {currency}
        {Math.abs(amount).toFixed(2)}
      </div>
    </div>
  );
};

export default Transactions;
