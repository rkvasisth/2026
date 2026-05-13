"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const ProductCardSwiper = ({
  children,
  data,
  paginationClass,
  showDiscount,
}) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
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
            slidesPerView: 4, // desktop
          },
        }}
        pagination={{
          el: `.${paginationClass}`,
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 20000000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              img={item.img}
              title={item.name}
              rating={item.rating}
              desc={item.rating}
              price={item.price}
              discount={item.discount}
              showDiscount={showDiscount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${paginationClass} text-center mt-11 flex justify-center w-3.25 h-3.25`}
      ></div>
    </div>
  );
};

export default ProductCardSwiper;
