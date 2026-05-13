import InnerPagesHero from "@/components/common/InnerPagesHero";
import SignUp from "@/components/common/SignUp";
import FaqsList from "@/components/faqs/FaqsList";
import LimitedOffers from "@/components/faqs/LimitedOffers";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Faq's" />
      <FaqsList />
      <LimitedOffers />
      <SignUp />
    </div>
  );
};

export default page;
