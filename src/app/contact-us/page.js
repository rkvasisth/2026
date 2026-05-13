"use client";
import InnerPagesHero from "@/components/common/InnerPagesHero";
import ContactUs from "@/components/contactus/Contactus";
import Googlemap from "@/components/contactus/Googlemap";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Contact Us" />
      <ContactUs />
      <Googlemap />
    </div>
  );
};

export default page;
