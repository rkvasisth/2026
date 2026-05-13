"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { productData } from "../common/Helper";
import { FilledStar, Wishlist } from "../common/Icons";
import ProductCardSwiper from "../common/ProductCardSwiper";

const BestSellers = () => {
  return (
    <section className="py-15 md:pt-35.5 md:pb-56.25">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Our <span className="text-secondary">Best </span> Sellers
          </h2>
          <p className="section-subtitle">
            Discover the favorites that keep our customers coming back for more.
          </p>
        </div>
      </div>
      <div className="mt-12.5">
        <div className="container  relative px-5 md:px-0">
          <ProductCardSwiper
            data={productData}
            paginationClass={"custom-pagination3"}
          />
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
