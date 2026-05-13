import Image from "next/image";
import React from "react";

const OurCommitment = () => {
  return (
    <section className="bg-diagonal-soft-reverse py-15 md:pt-35.5 md:pb-56.25">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Our <span className="text-secondary">Commitments</span> to You
          </h2>
          <p className="section-subtitle">
            Exceeding expectations with every promise we make.
          </p>
        </div>

        <div className="lg:flex mt-14.5 md:px-40  items-center">
          <div className="flex-1 flex flex-col">
            <div className="bg-white text-center py-8  px-6 lg:px-3 xl:px-7 mb-7 rounded-[15px] flex-1">
              <Image
                src={"/images/commitmentIcon1.png"}
                width={75}
                height={75}
                className="m-auto"
              />
              <div className="mt-5 mb-2 text-[20px] leading-6 font-bold">
                Free Shipping
              </div>
              <p className="text-[16px] leading-5 text-text-tertiary ">
                Enjoy the convenience of free shipping on all orders!
              </p>
            </div>

            <div className="bg-white text-center py-8 px-6 lg:px-3 xl:px-7 rounded-[15px] flex-1">
              <Image
                src={"/images/commitmentIcon2.png"}
                width={75}
                height={75}
                className="m-auto"
              />
              <div className="mt-5 mb-2 text-[20px] leading-6 font-bold">
                Unique Packaging
              </div>
              <p className="text-[16px] leading-5 text-text-tertiary ">
                Experience our commitment to uniqueness with every order.
              </p>
            </div>
          </div>
          <div className="md:flex-[1.5] md:px-12 lg:px-6 xl:px-12 my-15 ">
            <Image
              src={"/images/commitment-figure.png"}
              width={389}
              height={644}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-white text-center py-8 px-6 lg:px-3 xl:px-7 mb-7 rounded-[15px] flex-1">
              <Image
                src={"/images/commitmentIcon3.png"}
                width={75}
                height={75}
                className="m-auto"
              />
              <div className="mt-5 mb-2 text-[20px] leading-6 font-bold">
                100% Money Back
              </div>
              <p className="text-[16px] leading-5 text-text-tertiary ">
                Rest assured with our money-back guarantee at any time.
              </p>
            </div>

            <div className="bg-white text-center py-8 px-6 lg:px-3 xl:px-7 rounded-[15px] flex-1">
              <Image
                src={"/images/commitmentIcon4.png"}
                width={75}
                height={75}
                className="m-auto"
              />
              <div className="mt-5 mb-2 text-[20px] leading-6 font-bold">
                Fast Delivery
              </div>
              <p className="text-[16px] leading-5 text-text-tertiary ">
                Experience swift and efficiently reliable delivery with us
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
