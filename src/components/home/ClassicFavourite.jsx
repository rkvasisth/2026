"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FilledStar, Wishlist } from "../common/Icons";
import { productData } from "../common/Helper";
import ProductCardSwiper from "../common/ProductCardSwiper";
// Import Swiper styles

const ClassicFavourite = () => {
  return (
    <section className="bg-diagonal-soft py-15 md:pt-35.5 md:pb-56.25">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Our <span className="text-secondary">Classic</span> Favorites
          </h2>
          <p className="section-subtitle">
            Check out our top products that our customers love.
          </p>
        </div>
      </div>
      <div className="mt-12.5">
        <div className="container  relative md:px-0">
          <ProductCardSwiper
            data={productData}
            paginationClass={"custom-pagination1"}
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicFavourite;
