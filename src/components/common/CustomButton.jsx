import Link from "next/link";
import React from "react";

const CustomButton = ({ children, href, className, onClick, darkBtn }) => {
  let btnType = darkBtn ? "bg-dark" : "bg-secondary";
  let commonClasses =
    "text-[16px] leading-none text-white p-5 rounded-full  flex items-center gap-3";
  if (href) {
    return (
      <Link
        href={href}
        className={` ${commonClasses} ${className} ${btnType} `}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${commonClasses} ${btnType} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
