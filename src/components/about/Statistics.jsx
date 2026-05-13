import React from "react";

const Statistics = () => {
  return (
    <section className="py-20 md:py-35 ">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-4.5">
            Our <span className="text-secondary">Statistics</span>
          </h2>
          <p className="section-subtitle">
            What makes us special through our impressive statistics.
          </p>
        </div>
        <div className="flex flex-col gap-7.5 mt-12.5 md:flex-row lg:px-30">
          <div className="relative bg-white shadow-[0_12px_12px_12px_rgba(0,0,0,0.1)] flex-1 text-center border-b-2 border-[rgb(248,61,142)] rounded-2xl py-12">
            <h2 className="text-[44px] ">
              91<span className="text-secondary">+</span>
            </h2>
            <p>Awards Win</p>
          </div>

          <div className="bg-white shadow-[0_12px_12px_12px_rgba(0,0,0,0.1)] flex-1 text-center border-b-2 border-[rgb(248,61,142)] rounded-2xl py-12">
            <h2 className="text-[44px] ">
              95<span className="text-secondary">%</span>
            </h2>
            <p>Satisified Clients</p>
          </div>

          <div className="bg-white shadow-[0_12px_12px_12px_rgba(0,0,0,0.1)] flex-1 text-center border-b-2 border-[rgb(248,61,142)] rounded-2xl py-12">
            <h2 className="text-[44px] ">
              48<span className="text-secondary">+</span>
            </h2>
            <p>Years of Experience</p>
          </div>

          <div className="bg-white shadow-[0_12px_12px_12px_rgba(0,0,0,0.1)] flex-1 text-center border-b-2 border-[rgb(248,61,142)] rounded-2xl py-12">
            <h2 className="text-[44px] ">
              143<span className="text-secondary">+</span>
            </h2>
            <p>Employees Working</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
