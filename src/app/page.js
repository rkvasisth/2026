import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import ExploreMenu from "@/components/home/ExploreMenu";
import ClassicFavourite from "@/components/home/ClassicFavourite";
import ExploreCategories from "@/components/home/ExploreCategories";
import Summeroffer from "@/components/home/Summeroffer";
import BestSellers from "@/components/home/BestSellers";
import Testimonials from "@/components/home/Testimonials";
import SignUp from "@/components/common/SignUp";
import FollowUs from "@/components/home/FollowUs";

export default function Home() {
  return (
    <div>
      <section>
        <div className="container">
          <ExploreMenu />
        </div>
      </section>
      <ClassicFavourite />
      <ExploreCategories />
      <Summeroffer />

      <BestSellers />

      <Testimonials />

      <SignUp />

      <FollowUs />
    </div>
  );
}
