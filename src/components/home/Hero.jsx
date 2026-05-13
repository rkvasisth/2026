import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowRightIcon } from "../common/Icons";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex  max-sm:flex-col  items-center justify-between pt-8">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h4 className="text-[30px] md:text-[40px] text-primary mb-[11.5px] leading-none font-normal flex items-center gap-3">
            <span className="h-0.75 w-16 bg-dark block"></span> Welcome to The
          </h4>
          <h1 className="text-[60px] mb-5 md:text-[107px] leading-none tracking-[0] ">
            Discover <span className="text-secondary">Sweet</span> Delights!
          </h1>
          <p className="text-[16px] md:text-[22px] leading-[1.3] font-normal mt-2">
            Relish the timeless taste of handcrafted ice cream, made with
            passion and the finest ingredients.
          </p>

          <CustomButton darkBtn={"darkBtn"} className="mt-4 md:mt-8">
            Browse Our Classic Flavors
            <ArrowRightIcon />
          </CustomButton>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end mt-10 md:mt-0">
          <Image
            src="/images/heroImage.png"
            width={669}
            height={783}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
