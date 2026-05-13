import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowRightIcon, LeftHangingIcon } from "../common/Icons";
import Link from "next/link";
import Image from "next/image";
import ProductCardSwiper from "../common/ProductCardSwiper";
import { productData } from "../common/Helper";

const SignUp = () => {
  return (
    <section className=" py-15 md:pt-35.5 md:pb-56.25 ">
      <div className="container relative">
        <div className="text-center">
          <h2 className="section-title mb-4.5  max-w-153 mx-auto">
            Sign up For
            <span className="text-secondary"> Exclusive Deals </span>
            and Updates
          </h2>
          <p className="section-subtitle">
            Get 10% off your next order and stay updated with our latest offers.
          </p>
        </div>
        <div className="form mt-14 md:w-7/12 mx-auto">
          <form>
            <div className="flex gap-2.5">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-[40px]  bg-white shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)]
             focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition"
              />
              <CustomButton className="shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] ">
                Subscribe
                <ArrowRightIcon />
              </CustomButton>
            </div>
            <label className="flex items-center gap-3 cursor-pointer select-none justify-center mt-10">
              {/* Hidden checkbox */}
              <input type="checkbox" className="peer hidden" />

              {/* Custom UI */}
              <div
                className="w-5 h-5 rounded-full bg-[#E8E8E8] flex items-center justify-center
               transition-all duration-300
               peer-checked:bg-secondary peer-checked:scale-110
               shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)]"
              >
                {/* Check Icon */}
                <svg
                  className="w-3 h-3 text-white opacity-0 scale-50 
                 transition-all duration-300
                 peer-checked:opacity-100 peer-checked:scale-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Label */}
              <span className="text-[14px] leading-5 text-shadow-text-tertiary">
                I agree to the
                <Link
                  href="/privacy-policy"
                  className="text-secondary pl-1 underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </form>
        </div>
        <div className="leftHangingIcon absolute bottom-0  sm:left-5 md:left-5 lg:left-5 xl:left-0 w-8.5 h-8.5">
          <Image src={"/images/leftHangingIcon.png"} width={64} height={62} />
        </div>
        <div className="rightHangingIcon absolute -top-9  md:top-0 md:right-5 right-5 lg:top-0  lg:right-5 xl:right-0 w-8.5 h-8.5">
          <Image src={"/images/rightHangingIcon.png"} width={64} height={62} />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
