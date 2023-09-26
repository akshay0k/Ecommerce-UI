import React from "react";

const ProductCard = ({ items }) => {
  return (
    <div className="w-[134px]  md:w-[234px] md:h-[346px] mr-5 md:mr-0 text-sm">
      <span className=" text-green-500 flex items-center gap-2">
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="5" r="5" fill="#78A962" />
          <path
            d="M7.5 4L4.98404 7L3.5 5.27853"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
        <span >{items.stock}</span>
      </span>
      <div className="w-[134px] h-[134px] flex justify-center items-center">
        <img
          src={items.img}
          alt={items.title}
          className="w-full h-full object-cover "
        />
      </div>
      <div>
        <span className='flex items-center gap-5'><span className='text-yellow-500'>{items.star}</span><span className='text-gray-500'>{items.reviews}</span></span>
        <p className="md:w-[185px] w-[147px]">{items.title}</p>
        <span className="block text-gray-500 font-light">
          <strike>{items.prevPrice}</strike>
        </span>
        <span className="block font-semibold text-[18px]">{items.newPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
