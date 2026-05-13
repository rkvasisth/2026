import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowIcon } from "../common/Icons";

const Journey = () => {
  return (
    <section className=" py-10 lg:py-30 relative">
      <div className="container">
        <div className="flex lg:flex-row flex-col items-center lg:gap-10 xl:gap-0">
          <div className="w-full  lg:w-1/2 mb-10">
            <Image
              src="/images/journey-sec.png"
              width={590}
              height={590}
              className="m-auto"
            />
          </div>
          <div className="w-full  lg:w-1/2 xl:pr-30">
            <h2 className=" mb-5 max-lg:text-4xl text-[60px]">
              Our <span className="text-secondary">Journey</span> Began With a
              Simple Dream
            </h2>
            <p className="text-[18px] md:text-[20px] text-text-tertiary">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous new
              creations, every flavor is meticulously crafted in-house to ensure
              the highest quality and freshness.
            </p>
            <p className="text-[18px] md:text-[20px] text-text-tertiary">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
            <CustomButton className="mt-8">
              Read More
              <ArrowIcon />
            </CustomButton>
          </div>
        </div>
      </div>
      <Image
        src="/images/journey-abs.png"
        width={222}
        height={369}
        className="absolute right-0 bottom-50"
      />
    </section>
  );
};

export default Journey;
