import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowIcon } from "../common/Icons";
import Image from "next/image";

const Mission = () => {
  return (
    <section className=" pt-15  relative bg-[rgb(104,50,146)]">
      <div className="flex lg:flex-row flex-col items-stretch lg:gap-10 xl:gap-0">
        <div className="w-full max-w-183 ml-auto lg:w-1/2 mb-10 flex items-center">
          <div className="container lg:pl-20! lg:pr-0! xl:pl-30! xl:pr-25! relative">
            <h2 className=" mb-5 text-white  max-lg:text-4xl text-[60px]">
              Our Mission is to Create Moments
            </h2>
            <p className="text-[18px]  text-white  md:text-[20px] ">
              We strive to foster a welcoming and joyful environment where
              customers of all ages can gather, celebrate, and make lasting
              memories. Our commitment extends beyond serving great ice cream.
            </p>
            <CustomButton className="mt-8">
              Read More
              <ArrowIcon />
            </CustomButton>
            <Image
              src={"/images/mission-triangle.svg"}
              width={47}
              height={52}
              className="hidden lg:block absolute top-16 lg:left-5 xl:left-10"
            />
            <Image
              src={"/images/mission-cross.svg"}
              width={44}
              height={46}
              className="hidden lg:block absolute bottom-15 lg:left-5 xl:left-0 "
            />
            <Image
              src={"/images/mission-wave.svg"}
              width={78}
              height={70}
              className="absolute bottom-0 right-10"
            />
          </div>
        </div>

        <div className="w-full  lg:w-1/2 ">
          <Image src="/images/mission.png" width={921} height={723} />
        </div>
      </div>
    </section>
  );
};

export default Mission;
