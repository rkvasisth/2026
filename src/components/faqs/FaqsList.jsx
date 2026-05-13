"use client";
import React, { useState } from "react";
import { faqsList } from "../common/Helper";

const FaqsList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className=" py-15 md:pt-35 md:pb-35">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Frequently Asked
            <span className="text-secondary">Questions</span>
          </h2>
          <p className="section-subtitle">
            Some of the queries you want to know about us.
          </p>
        </div>

        <div className="flex gap-7 flex-wrap items-start mt-13">
          {faqsList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-[calc(100%-14px)] md:w-[calc(50%-14px)] bg-white shadow-[0_2px_73px_2px_rgba(0,0,0,0.04)]  "
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="p-5 cursor-pointer text-[18px] font-bold bg-white text-left"
                >
                  {item.question}
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 ">
                    <p className="p-5 text-[16px] leading-5">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqsList;
