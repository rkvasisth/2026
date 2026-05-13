import Image from "next/image";
import React from "react";
import { productCategory } from "../common/Helper";
import CustomButton from "../common/CustomButton";
import { ArrowRightIcon } from "../common/Icons";
const ExploreCategories = () => {
  return (
    <div>
      <section className="py-15 md:pt-35.5 md:pb-56.25">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title mb-4.5">
              Explore Our <span className="text-secondary">Categories</span>
            </h2>
            <p className="section-subtitle">
              Browse through our different categories to find your favorite ice
              cream treats.
            </p>
          </div>

          <div className="categoryCardsContainer flex md:flex-row flex-col gap-8 mt-12.5">
            {productCategory.map((item, index) => (
              <div className="categoryCards relative md:flex-1" key={index}>
                <Image
                  src={item.catImg}
                  width={350}
                  height={458}
                  alt={item.catName}
                  className="w-full"
                />
                <div className="categoryName flex items-center justify-between absolute left-2 bottom-2 right-2  bg-white  py-2.5 px-3 rounded-2xl">
                  <p className="text-[18px]  md:text-[16px] lg:text-[20px] xl:text-[22px] font-bold">
                    {item.catName}
                  </p>
                  <CustomButton>
                    <ArrowRightIcon />
                  </CustomButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCategories;
