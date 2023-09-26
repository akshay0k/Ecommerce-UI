import React from "react";

const Wishlist = () => {
  return (
    <div className="max-w-full flex flex-col items-center justify-center gap-5 ">
      <div className="sm:block md:hidden flex flex-col justify-center items-center gap-4 ">
        <div className="bg-[#F5F7FF] w-[346px] h-[108px] flex items-center flex-col justify-center gap-4">
          <h1 className="font-bold text-[16px] text-center leading-[24px]">
            Compare Products
          </h1>
          <p className="text-center text-[13px] opacity-70 leading-[17px]">
            You have no items to compare.
          </p>
        </div>

        <div className="bg-[#F5F7FF] w-[346px] h-[108px] flex items-center flex-col justify-center gap-4">
          <h1 className="font-[700] text-[16px] text-center leading-[24px]">
            My Wish List
          </h1>
          <p className="text-center text-[13px] opacity-70 leading-[17px]">
            You have no items in your wish list.
          </p>
        </div>

        <div className="">
          <img src="/assets/img49.png" alt="" />
        </div>
      </div>

      <div className="relative  p-4 md:hidden">
        <div className="p-5 text-[12px] opacity-70 bg-gradient-to-b from-black to-white text-transparent bg-clip-text ">
          MSI has unveiled the Prestige Series line of business-class and gaming
          notebooks. Tuned for color accuracy, the Prestige Series also
          leverages True Color Technology, which allows users to adjust the
          display profile to best fit their computing needs.
          <br /> <br />
          There are six different screen profiles, which are tuned for gaming,
          reducing eye fatigue, sRGB color accuracy, increasing clarity for
          words and lines, reducing harmful blue light, and optimizing contrast
          for watching movies. Given the various display profiles and discrete
          graphics chip, the Prestige Series notebooks can be used for various
          design work as well as for office tasks given that the screen can be
          adjusted for better clarity, color accuracy, or for eye strain
          reduction. Users working with video or 3D rendering will appreciate
          the "movie mode" for which contrast is increased. Home users or
          students can benefit from the "anti-blue" and the "office mode"
          options, both of which are designed to reduce eye strain. This is
          helpful when working on the computer for extended periods of time.
          Additionally, in their down time, students can also use the "gamer
          mode" to increase the screen brightness.
        </div>

        <button className=" absolute bottom-[22px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#A2A6B0] text-[#A2A6B0] px-5 py-2 rounded-[50px] font-semibold text-xs">
          More
        </button>
        <div className="bg-white h-[200px]"></div>
      </div>
    </div>
  );
};

export default Wishlist;
