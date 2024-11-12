import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup ">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px] h-[400px]  flex flex-col items-center justify-center ">
              {/* header section */}
              <div className="flex items-center justify-between  mb-4 w-full">
                <div>{/* <h1 className=" ">Order Now</h1> */}</div>

                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>

              {/* form section  */}
              <div className="mt-4 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 mt-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 mt-4 "
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 mt-4 "
                />
                <div className=" flex justify-center items-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full justify-center items-center mt-6">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
