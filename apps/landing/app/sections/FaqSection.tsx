import React from 'react'
import FAQItem from '../components/FaqItem';

const FaqQuestions = [
  {
    question: "Can I use the service for business transactions?",
    answer:
      "Yes, our platform supports both personal and business transactions. Businesses can benefit from our secure and efficient transfer options tailored to their needs.",
  },
  {
    question: "What is the maximum amount I can transfer?",
    answer:
      "Transfer limits vary based on your account verification level. Basic accounts can transfer up to $10,000 per day, while verified business accounts have higher limits available.",
  },
  {
    question: "How do I update my account information?",
    answer:
      "You can update your account information by logging into your dashboard and navigating to the 'Profile Settings' section. Changes to sensitive information may require additional verification.",
  },
  {
    question: "Are there any benefits for frequent users?",
    answer:
      "Yes! Frequent users enjoy reduced transaction fees, priority customer support, and access to exclusive features. Our loyalty program rewards active users with additional benefits.",
  },
];

const FaqSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Content - Header and Contact (Column 1) */}
          <div className="order-1 lg:order-1 lg:col-span-1 text-center lg:text-left">
            <div className="mb-8">
              <p className="text-gray-500 text-sm font-medium mb-2">FAQ'S</p>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight lg:max-w-3">
                Frequently Asked Questions
              </h2>
            </div>
 
            <div className="text-gray-600 text-lg ">
              <p className="mb-4">Any questions?</p>
              <p className="text-[#5945FD] text-3xl"> peercash@fintech.com</p>
            </div>
          </div>

          {/* Right Content - FAQ Items (Columns 2 & 3) */}
          <div className="order-2 lg:order-2 lg:col-span-2">
            <div className="space-y-0">
              {FaqQuestions.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection