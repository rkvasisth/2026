import Journey from "@/components/about/Journey";
import Mission from "@/components/about/Mission";
import Statistics from "@/components/about/Statistics";
import TeamMembers from "@/components/about/TeamMembers";
import InnerPagesHero from "@/components/common/InnerPagesHero";
import SignUp from "@/components/common/SignUp";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="About" />
      <Journey />
      <Mission />
     <Statistics />
     <TeamMembers />
     <SignUp />
    </div>
  );
};

export default page;
