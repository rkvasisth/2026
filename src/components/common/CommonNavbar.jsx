"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Hero from "../home/Hero";
import { ThemeContext } from "@/provider/ThemeContext";
import CustomButton from "./CustomButton";

const CommonNavbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  if (isHome) {
    return (
      <div className="heroContainer relative bg-[url('/images/hero-section-bg.jpg')] bg-cover bg-center bg-no-repeat 2xl:h-screen">
        <div className="container">
          <Navbar variant="transparent" />
          <Hero />
          <p>Current Mode is: {theme}</p>
          <CustomButton
            darkBtn={"darkBtn"}
            className="mt-4 md:mt-8"
            onClick={() => toggleTheme()}
          >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container pb-3!">
        <Navbar />
      </div>
    </>
  );
};

export default CommonNavbar;
