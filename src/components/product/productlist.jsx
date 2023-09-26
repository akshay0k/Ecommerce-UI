import React from "react";
import data from "../../db/data";
import ProductCard from "./ProductCard";
const Productlist = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row ">
      <div className="flex-[1] hidden md:block">
        <h2 className="text-center font-['Poppins'] font-medium py-4">
          ‹ Back
        </h2>

        <div className="bg-[#F5F7FF] mt-2 px-4 text-sm w-[234px] ">
          <h2 className="text-center tracking-wide font-bold text-[16px] py-5 ">
            Filters
          </h2>
          <button className="rounded-full w-full border-2 border-[#A2A6B0] px-5 py-2 text-[#A2A6B0]">
            Clear Filter
          </button>
          <h3 className="my-4 text-black font-bold">Category</h3>

          <p className="flex justify-between">
            {" "}
            <span className="font-light">CUSTOM PCS</span>{" "}
            <span className="text-end">15</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">MSI ALL-IN-ONE PCS</span>{" "}
            <span className="text-end">45</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">HP/COMPAQ PCS</span>{" "}
            <span className="text-end">1</span>
          </p>
          <h2 className="my-4 text-black font-bold">Price</h2>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$0.00 - $1,000.00</span>{" "}
            <span className="text-end">19</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$1,000.00 - $2,000.00</span>{" "}
            <span className="text-end">21</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$2,000.00 - $3,000.00</span>{" "}
            <span className="text-end">9</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$3,000.00 - $4,000.00</span>{" "}
            <span className="text-end">6</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$4,000.00 - $5,000.00</span>{" "}
            <span className="text-end">3</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$5,000.00 - $6,000.00</span>{" "}
            <span className="text-end">1</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$6,000.00 - $7,000.00</span>{" "}
            <span className="text-end">1</span>
          </p>
          <p className="flex justify-between">
            {" "}
            <span className="font-light">$7,000.00 And Above</span>{" "}
            <span className="text-end">1</span>
          </p>
          <div>
            <h4 className="my-3 text-black font-bold">color</h4>
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 bg-black rounded-full focus:outline-none focus:ring ring-offset-2 focus:ring-blue-500"></button>
              <button className="w-7 h-7 bg-red-600 rounded-full focus:outline-none focus:ring ring-offset-2 focus:ring-blue-500"></button>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="py-2 text-black font-bold">Filter Name</h4>
            <button className="w-full bg-blue-500 text-white px-5 py-2 rounded-full mb-4">
              Apply Filters(2)
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[234px] mt-2 ">
          <div className="bg-[#f5f7ff] flex flex-col gap-5 h-24 shrink-0 items-start ml-0 mr-px px-5">
            <h3 className="text-center font-['Poppins'] font-bold">Brands</h3>
            <div className="border-solid border-[#a2a6b0] self-stretch flex flex-col h-10 shrink-0 items-center mx-4 py-1 border-2 rounded-[50px]">
              <div className="text-center text-sm font-['Poppins'] font-semibold text-[#a2a6b0]">
                All Brands
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-end pt-40 items-end mx-0">
            <div className="border-solid border-[#f5f7ff] w-1/2 h-20 bg-white absolute top-0 left-0 flex flex-col justify-center items-center border">
              <img src="/assets/image01.png" id="Image1" className="w-24" />
            </div>
            <div className="border-solid border-[#f5f7ff] w-1/2 h-20 bg-white absolute top-0 left-[116.72003173828125px] flex flex-col justify-center items-center border">
              <img src="/assets/image02.png" id="Image2" className="w-24" />
            </div>
            <div className="border-solid border-[#f5f7ff] w-1/2 h-20 bg-white absolute top-20 left-0 flex flex-col justify-center items-center border">
              <img src="/assets/image03.png" id="Image3" className="w-24" />
            </div>
            <div className="border-solid border-[#f5f7ff] w-1/2 h-20 bg-white absolute top-20 left-[116.72003173828125px] flex flex-col justify-center items-center border">
              <img src="/assets/image04.png" id="Image4" className="w-24" />
            </div>
            <div className="border-solid border-[#f5f7ff] w-1/2 h-20 bg-white absolute top-40 left-0 flex flex-col justify-center items-center border">
              <img src="/assets/image05.png" id="Image5" className="w-24" />
            </div>
            <div className="border-solid border-[#f5f7ff] bg-white relative flex flex-col justify-center w-1/2 h-20 shrink-0 items-center border">
              <img src="/assets/image06.png" id="Image6" className="w-24" />
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-4  w-[234px]">
          <div className="bg-[#F5F7FF]  h-[108px]  w-[234px] flex items-center flex-col justify-center gap-4">
            <h1 className="font-bold text-[16px] text-center leading-[24px]">
              Compare Products
            </h1>
            <p className="text-center text-[13px] opacity-70 leading-[17px]">
              You have no items to compare.
            </p>
          </div>

          <div className="bg-[#F5F7FF] h-[108px]  w-[234px] flex items-center flex-col justify-center gap-4">
            <h1 className="font-[700] text-[16px] text-center leading-[24px]">
              My Wish List
            </h1>
            <p className="text-center text-[13px] opacity-70 leading-[17px]">
              You have no items in your wish list.
            </p>
          </div>

          <div className=" w-[234px]">
            <img className="w-full" src="/assets/img49.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" px-4 w-full ">
        {/* mobile screen */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <button className="px-5 py-2 border">Filter</button>
            <button className="px-5 py-2 border">Sort By: Position</button>
          </div>
          <h4 className="text-gray-400 text-sm mt-4">Items 1-35 of 61</h4>
        </div>

        {/* full screen */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-400 text-sm">Items 1-35 of 61</h4>
            <div className="flex items-center gap-2">
              <button className="px-5 py-2 border">Sort By: Position</button>
              <button className="px-5 py-2 border">Show: 35 per page</button>
              <button className="px-5 py-2 ">
                <svg
                  width="110"
                  height="50"
                  viewBox="0 0 110 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="110" height="50" fill="white" />
                  <rect
                    width="32"
                    height="32"
                    transform="translate(19 9)"
                    fill="white"
                  />
                  <rect
                    x="25.9004"
                    y="15.8999"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="25.9004"
                    y="23.2144"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="25.9004"
                    y="30.5283"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="33.2139"
                    y="23.2144"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="33.2139"
                    y="30.5283"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="33.2139"
                    y="15.8999"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="40.5283"
                    y="23.2144"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="40.5283"
                    y="30.5283"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    x="40.5283"
                    y="15.8999"
                    width="3.57143"
                    height="3.57143"
                    fill="black"
                    stroke="black"
                  />
                  <rect
                    width="32"
                    height="32"
                    transform="translate(60 9)"
                    fill="white"
                  />
                  <rect
                    x="64.5713"
                    y="30.0283"
                    width="9.14286"
                    height="2.74286"
                    fill="#A2A6B0"
                  />
                  <rect
                    x="64.5713"
                    y="17.2285"
                    width="21.9429"
                    height="2.74286"
                    fill="#A2A6B0"
                  />
                  <rect
                    x="64.5713"
                    y="23.6284"
                    width="16.4571"
                    height="2.74286"
                    fill="#A2A6B0"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <button className="border px-5 py-2 flex items-center gap-2">
              <span>CUSTOM PCS (24)</span>
              <img src="/assets/grp1.png" alt="" srcset="" />
            </button>
            <button className="border px-5 py-2 flex items-center gap-2">
              <span>HP/COMPAQ PCS (24)</span>
              <img src="/assets/grp1.png" alt="" srcset="" />
            </button>
            <button className="border px-5 py-2">Clear All</button>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center  md:gap-1 mt-3  md:pl-10 ">
          {data.map((items, index) => (
            <ProductCard key={index} items={items}/>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-xs text-gray-400 font-semibold my-3">
          <button className="border w-8 h-8 rounded-full">›</button>
          <button className="border w-8 h-8 rounded-full">1</button>
          <button className="border w-8 h-8 rounded-full bg-gray-200 text-black text-sm">
            2
          </button>
          <button className=" w-8 h-8 rounded-full tracking-wider">...</button>
          <button className="border w-8 h-8 rounded-full">15</button>
          <button className="border w-8 h-8 rounded-full">›</button>
        </div>
        <div className="relative  p-4 hidden md:block ">
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

        <button className=" absolute bottom-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#A2A6B0] text-[#A2A6B0] px-5 py-2 rounded-[50px] font-semibold text-xs">
          More
        </button>
        <div className="bg-white h-[300px]"></div>
      </div>

      </div>
      
    </div>
    
  );
};

export default Productlist;
