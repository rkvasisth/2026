import React from "react";
import ProductCardSwiper from "../common/ProductCardSwiper";
import { productData } from "../common/Helper";

const DiscountedProduct = () => {
  const discountedProducts = productData.filter(
    (item) => item.discount && item.discount < 30,
  );
  return (
    <section className=" py-15 md:pt-35.5 md:pb-56.25">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Upto<span className="text-secondary"> 30% </span>Discount
          </h2>
          <p className="section-subtitle">
            Discover the favorites that keep our customers coming back for more.
          </p>

          {/* <MySwiper/> */}
        </div>
      </div>
      <div className="mt-12.5">
        <div className="container  relative md:px-0">
          <ProductCardSwiper
            data={discountedProducts}
            paginationClass={"custom-pagination1"}
            showDiscount={true}
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountedProduct;
