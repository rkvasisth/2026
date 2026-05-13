import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowIcon } from "../common/Icons";

const ExploreMenu = () => {
  return (
    <section className="max-md:py-15 pb-10 md:pb-0">
      <div className="containe">
        <div className="flex md:flex-row flex-col items-center">
          <div className="w-full lg:w-1/2">
            <Image src="/images/explore-menu-a.png" width={680} height={724} />
          </div>
          <div className="w-full lg:w-1/2 max-md:mt-8">
            <h2 className=" max-lg:text-4xl text-[60px]">
              Relive the Sweet Memories of Classic{" "}
              <span className="text-secondary">Ice Creams</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-text-tertiary">
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </p>
            <CustomButton className="mt-8">
              Explore Our Menu
              <ArrowIcon />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;
