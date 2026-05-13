"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { testimonialsCopy } from "../common/Helper";
import Image from "next/image";
import { FilledStar, NonFilledStar } from "../common/Icons";

const Testimonials = () => {
  return (
    <section className=" py-15 md:pt-35.5 md:pb-56.25  bg-[url('/images/testimonial-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h2 className="section-title mb-4.5  max-w-153 mx-auto">
          Hear from Our <span className="text-secondary">Happy Ice Cream </span>
          Lovers
        </h2>
        <div className="md:flex md:items-center">
          <div className="md:w-2.5/12 max-md:flex max-md:justify-center">
            <Image
              src={"/images/testimonial-left-2.png"}
              width={300}
              height={400}
            />
          </div>
          <div className="md:w-7/12 pl-10 pr-10 ">
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },
                }}
                pagination={{
                  el: ".custom-pagination2",
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 500000,
                  disableOnInteraction: false,
                }}
                className="bg-[url('/images/testimonialSlideBg.png')] bg-center bg-no-repeat"
              >
                {testimonialsCopy.map((items, index) => (
                  <SwiperSlide
                    key={index}
                    className="text-center px-4 md:px-10"
                  >
                    <div className="max-w-[90%] md:max-w-2xl mx-auto">
                      <div className="text-[16px] md:text-[20px] leading-6 md:leading-8 text-primary wrap-break-word">
                        {items.testimonialText}
                      </div>

                      <div className="text-secondary text-[16px] md:text-[18px] font-bold mt-6">
                        {items.name}
                      </div>

                      <div className="text-text-tertiary text-[12px] md:text-[14px]">
                        {items.customerStatus}
                      </div>

                      <div className="flex justify-center mt-2">
                        {Array.from({ length: 5 }, (_, i) =>
                          i < items.rating ? (
                            <FilledStar key={i} />
                          ) : (
                            <NonFilledStar key={i} />
                          ),
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-pagination2 text-center mt-11 flex justify-center w-3.25 h-3.25"></div>
            </div>
          </div>
          <div className="md:w-2.5/12 max-md:flex max-md:justify-center max-md:mt-5">
            <Image
              src={"/images/testimonial-right-2.png"}
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
