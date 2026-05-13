"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { teamData } from "../common/Helper";
import Link from "next/link";
import CustomButton from "../common/CustomButton";

const TeamMembers = () => {
  return (
    <section className="py-20 md:py-35 bg-[url('/images/ourTeamBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Our <span className="text-secondary">Team</span> Members
          </h2>
          <p className="section-subtitle">
            Get to know the friendly faces behind your favorite flavors.
          </p>
        </div>
        <div className="mt-12.5 lg:px-30">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
          >
            {teamData.map((member, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={member.img}
                    width={314}
                    height={314}
                    className="m-auto"
                  />
                  <div className="text-center mt-8">
                    <div className="text-[22px] font-bold text-secondary">
                      {member.name}
                    </div>
                    <div className="text-[16px] leading-6 text-text-tertiary mt-2 mb-5">
                      {member.designation}
                    </div>
                    <div className="flex gap-2.5 justify-center">
                      
                      <Link
                        href={member.facebook}
                        className="text-[16px] leading-none text-white  rounded-[100px]  flex items-center justify-center  bg-secondary w-11.25 h-11.25"
                      >
                        <Image
                          src={"/images/facebook.svg"}
                          width={10}
                          height={16}
                        />
                      </Link>
                      <Link
                        href={member.instagram}
                        className="text-[16px] leading-none text-white  rounded-[100px]  flex items-center justify-center  bg-secondary w-11.25 h-11.25"
                      >
                        <Image
                          src={"/images/instagram.svg"}
                          width={15}
                          height={16}
                        />
                      </Link>
                      <Link
                        href={member.youtube}
                        className="text-[16px] leading-none text-white  rounded-[100px]  flex items-center justify-center  bg-secondary w-11.25 h-11.25"
                      >
                        <Image
                          src={"/images/youtube.svg"}
                          width={19}
                          height={16}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
