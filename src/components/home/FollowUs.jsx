import Image from "next/image";
import React from "react";

const FollowUs = () => {
  return (
    <section className="py-15 md:pt-35.5 md:pb-56.25 bg-[url('/images/follow-us-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container relative">
        <div className="text-center">
          <h2 className="section-title mb-4.5  max-w-153 mx-auto">
            Follow Us on
            <span className="text-secondary"> Exclusive Deals </span>
            Instagram
          </h2>
          <p className="section-subtitle">
            Join our Instagram community for updates, special deals, and more!
          </p>
        </div>
        <div className="relative mt-12.5">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6">
            <Image
              src={"/images/insta1.png"}
              width={263}
              height={326}
              className="w-full"
            />
            <Image
              src={"/images/insta2.png"}
              width={263}
              height={326}
              className="w-full"
            />
            <Image
              src={"/images/insta3.png"}
              width={263}
              height={326}
              className="w-full"
            />
            <Image
              src={"/images/insta4.png"}
              width={263}
              height={326}
              className="w-full"
            />
            <Image
              src={"/images/insta5.png"}
              width={263}
              height={326}
              className="w-full"
            />
          </div>
          <div className=" absolute -top-4 -left-4 md:-top-6 md:-left-2 lg:-top-6 lg:-left-2 xl:-top-6 xl:-left-6 z-[-1]">
            <Image
              src={"/images/instaLeftHanging.png"}
              width={64}
              height={62}
            />
          </div>
          <div className=" absolute -bottom-4 -right-4 md:-bottom-6 md:-right-2 lg:-bottom-6 lg:-right-2 xl:-bottom-6 xl:-right-6 z-[-1]">
            <Image
              src={"/images/InstaRightHangign.png"}
              width={64}
              height={62}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
