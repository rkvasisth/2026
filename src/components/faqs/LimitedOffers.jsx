import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowRightIcon } from "../common/Icons";

const LimitedOffers = () => {
  return (
    <section className="bg-[rgb(248,61,142)] py-15">
      <div className="lg:flex w-full justify-between lg:items-center xl:items-start text-white ">
        <div className="flex-1 relative">
          <Image src="/images/limitedOfferLeft.png" width={599} height={464} />
          <Image
            src="/images/limitedOfferLeftSupporting.png"
            width={134}
            height={54}
            className="absolute lg:-right-10 right-10 lg:top-0 top-15 "
          />
        </div>
        <div className="text-center flex-1 my-10 lg:m-0">
          <h2 className="text-[62px] xl:text-[112px] leading-none">
            Limited Time Offer!
          </h2>
          <p className="text-[24px] xl:text-[30px] leading-none mt-5 xl:mt-10">
            Get <span className="text-[rgb(255,216,0)]">20% Off</span> All Vegan
            Ice Creams!
          </p>
          <div className="text-center mt-5 xl:mt-9">
            <CustomButton darkBtn={"darkBtn"} className="m-auto px-12">
              Get This Deal
              <ArrowRightIcon />
            </CustomButton>
          </div>
          <p className="text-[16px] mt-6">Use code: VEGAN20 at checkout.</p>
        </div>
        <div className="flex-1 relative ">
          <Image
            src="/images/LimitedOffers-right.png"
            width={492}
            height={549}
            className="m-auto"
          />
          <Image
            src="/images/limitedOfferRightSupporting.png"
            width={134}
            height={54}
            className="absolute lg:-left-10 left-3 bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
