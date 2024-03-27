/** @format */

import React, { forwardRef, useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import toast from "react-hot-toast";
import { FixedSizeList as List } from "react-window";
import { useSelector, useDispatch } from "react-redux";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Payments = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center bg-[#283046] p-5  rounded-md gap-3">
          <div className="flex flex-col justify-start items-start  text-[#d0d2d6]">
            <h2 className="text-xl font-bold">$5000</h2>
            <span className="text-sm font-medium">Total Sales</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        {/* end of 1 */}
        <div className="flex justify-between items-center bg-[#283046] p-5  rounded-md gap-3">
          <div className="flex flex-col justify-start items-start  text-[#d0d2d6]">
            <h2 className="text-xl font-bold">$2000</h2>
            <span className="text-sm font-medium">Availble Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        {/* end of 2 */}
        <div className="flex justify-between items-center bg-[#283046] p-5  rounded-md gap-3">
          <div className="flex flex-col justify-start items-start  text-[#d0d2d6]">
            <h2 className="text-xl font-bold">$10</h2>
            <span className="text-sm font-medium">Withdrawal Ammaount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
        {/* end of 3 */}
        <div className="flex justify-between items-center bg-[#283046] p-5  rounded-md gap-3">
          <div className="flex flex-col justify-start items-start  text-[#d0d2d6]">
            <h2 className="text-xl font-bold">$20</h2>
            <span className="text-sm font-medium">Pending Amanounts</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-orange-600 shadow-lg" />
          </div>
        </div>

        {/* end of 4 */}
      </div>
      {/* end--> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4"></div>
    </div>
  );
};

export default Payments;
