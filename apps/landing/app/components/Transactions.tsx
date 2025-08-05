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
    <div className="flex bg-white p-3 sm:p-4 mb-3 sm:mb-4 items-center justify-between rounded-2xl w-full">
      <div className="flex items-center flex-1 min-w-0">
        <div className="bg-[#F1F5F9] p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
          <Image
            src={logo}
            alt={alt}
            width={20}
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold font-manrope text-gray-900 text-sm sm:text-base truncate">
            {company}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{summary}</p>
        </div>
      </div>
      <div className="font-semibold text-gray-900 text-sm sm:text-base flex-shrink-0 ml-2">
        {currency}
        {Math.abs(amount).toFixed(2)}
      </div>
    </div>
  );
};

export default Transactions;
