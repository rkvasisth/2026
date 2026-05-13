import InnerPagesHero from "@/components/common/InnerPagesHero";
import GelatoSlider from "@/components/review/gelatoSlider";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Review" />
      <GelatoSlider />
    </div>
  );
};

export default page;
