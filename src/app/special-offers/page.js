import InnerPagesHero from "@/components/common/InnerPagesHero";
import SignUp from "@/components/common/SignUp";
import Summeroffer from "@/components/home/Summeroffer";
import DiscountedProduct from "@/components/special-offers/discountedProduct";
import OurCommitment from "@/components/special-offers/OurCommitment";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Special Offers" />
      <DiscountedProduct />
      <Summeroffer />
      <OurCommitment />
      <SignUp />
    </div>
  );
};

export default page;
