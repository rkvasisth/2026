import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EmailIcon, FbIcon, InstaIcon, LocationIcon, PhoneIcon } from "./Icons";

const Footer = () => {
  return (
    <section className=" pt-15 md:pt-25 bg-dark relative">
      <div className="container ">
        <div className="px-5  md:px-12 lg:px-32.5 md:pb-22">
          <div className="flex gap-12.5 lg:flex-row flex-col">
            <Link href={"/"}>
              <Image src={"/images/logo-light.png"} width={160} height={108} alt="Logo Light" />
            </Link>

            <div>
              <p className="text-white text-[22px] font-semibold leading-0">
                Navigation
              </p>
              <ul className="flex flex-wrap list-disc marker:text-secondary text-[#CFB6E2] text-[14px] gap-3 md:gap-5 mt-6 list-inside">
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>Prodects</Link>
                </li>
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>Blog</Link>
                </li>
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>Shop</Link>
                </li>
                <li className="flex-1 basis-[calc(50%-10px)]">
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex  items-center gap-5.5 mb-6">
                  <div className="w-11.5 h-11.5 bg-white/10 flex justify-center items-center rounded-full">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-white">
                      Address:
                    </p>
                    <p className="text-[14px] leading-5 text-[#CFB6E2]">
                      <Link
                        href="https://www.google.com/maps?q=28.6139,77.2090"
                        target="_blank"
                      >
                        121 King Street Melbourne, 3000, Australia
                      </Link>
                    </p>
                  </div>
                </li>

                <li className="flex = items-center gap-5.5">
                  <div className="w-11.5 h-11.5 bg-white/10 flex justify-center items-center rounded-full">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-white">
                      Email:
                    </p>
                    <p className="text-[14px] leading-5 text-[#CFB6E2]">
                      <Link href={"mailto:info@example.co"}>
                        info@example.com
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex  items-center gap-5.5 mb-6">
                  <div className="w-11.5 h-11.5  flex justify-center items-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-white">
                      <Link href="tel:+123456780123">+123456780123</Link>
                    </p>
                    <p className="text-[14px] leading-5 text-[#CFB6E2]">
                      Got Questions?{" "}
                      <Link href="tel:+123456780123">Call us 24/7</Link>
                    </p>
                  </div>
                </li>

                <li className="flex = items-center gap-5.5">
                  <div className="w-11.5 h-11.5 bg-white/10 flex justify-center items-center rounded-full">
                    <Link href={"/"}>
                      <FbIcon />
                    </Link>
                  </div>
                  <div className="w-11.5 h-11.5 bg-white/10 flex justify-center items-center rounded-full">
                    <Link href={"/"}>
                      <InstaIcon />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-32.5">
          <div className="py-4.5 text-[12px] text-[#CFB6E2] text-center border-t border-white/15">
            Copyright © 2024 BlackRise Themes Inc All rights reserved.
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={"/images/footer-bg.png"} width={160} height={108} alt="Footer" />
      </div>
    </section>
  );
};

export default Footer;
