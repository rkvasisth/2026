import InnerPagesHero from "@/components/common/InnerPagesHero";
import OurTeamListing from "@/components/our-team/OurTeamListing";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Our Team" />
      <OurTeamListing />
    </div>
  );
};

export default page;
