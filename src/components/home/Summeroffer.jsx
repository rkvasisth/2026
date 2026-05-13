import Image from "next/image";
import React from "react";
import { ArrowRightIcon, DottedLine } from "../common/Icons";
import CustomButton from "../common/CustomButton";

const Summeroffer = () => {
  return (
    <div>
      <section className="py-15 md:pt-28.5 md:pb-16  bg-[url('/images/summerOffersBg.png')] bg-cover bg-center bg-no-repeat ">
        <div className="container">
          <div className="flex flex-col max-sm:gap-10  max-lg:gap-5 lg:gap-0 lg:flex-row xl:pr-36.25 xl:pl-51.25">
            <div>
              <h2 className="text-[80px] md:text-[112px] mb-6.75 text-white leading-none">
                Summer Special!
              </h2>
              <p className="text-[30px] text-white mb-9">
                Buy One Sundae, Get One 50% Off!
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <CustomButton>
                  Get This Deal
                  <ArrowRightIcon />
                </CustomButton>
                <p className="pl-3 md:pl-0 text-white text-[16px]">
                  Use code: SUMMER50 at checkout.
                </p>
              </div>
            </div>
            <div className="relative max-sm:pt-0 max-lg:flex max-lg:justify-center max-lg:pt-25">
              <Image
                src="/images/summers-choclate.png"
                width={563}
                height={538}
                alt="Summers Choclate"
                className="relative z-99 mt-10 md:mt-0"
              />
              <DottedLine className="hidden lg:block absolute top-0 md:-top-14.75 md:-left-10 z-9" />
              <p className="absolute top-0 max-sm:left-0 w-28 h-28 text-[34px] md:top-15 md:left-10 lg:top-4 lg:-left-27.5 lg:right-4 md:text-[44px] text-white md:w-34.5 md:h-34.5 border-4 border-[#F69C0C] flex flex-col items-center justify-center rounded-[50%] bg-linear-to-r from-[#FBAB2A] to-[#FFC972]">
                50% <span className="text-[21px] md:text-[26px]">OFF</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Summeroffer;
