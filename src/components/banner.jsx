import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="container flex items-center justify-center ">
          <img className="" src="/assets/banner.png" alt="" />
        </div>
      </div>
      <div className="my-2 md:my-5  flex items-center justify-center">
        <p className="text-start text-[12px] md:text-[12px] container flex flex-wrap pl-4 md:pl-0 gap-3">
          <span>Home</span> › <span>Laptops</span> ›<span>Everyday Use Notebooks</span>› <span>MSI Prestige Series</span>›<span className="text-[#A2A6B0]"> MSI WS
          Series</span> 
        </p>
      </div>
    </>
  );
};

export default Banner;
