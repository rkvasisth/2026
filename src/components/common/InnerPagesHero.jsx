import React from "react";

const InnerPagesHero = ({ title }) => {
  return (
    <div className="h-116.75 bg-[url('/images/innerHeroBG.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col">
      <h1 className="text-[80px]">{title}</h1>
      <div>
        <p className="bg-white p-5 rounded-4xl">
          <span className="text-secondary pr-5"> Home </span> /{" "}
          <span className="pl-5">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default InnerPagesHero;
