import { Bars3Icon, XMarkIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Sidebarlayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-full flex  bg-gray-100 ">
      <div
        className={`bg-white shadow-lg transition-all duration-300 h-full ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b ">
          <h1
            className={`text-xl font-bold text-gray-700 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            } `}
          >
            Dashboard
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className="flex flex-col space-y-3 p-3">
          <NavItem isOpen={isOpen} text="Home" />

          <NavItem isOpen={isOpen} text="About" />
          <NavItem isOpen={isOpen} text="Contact" />
        </nav>
      </div>
      <div className=" flex flex-col flex-1">
        <header className="bg-white shadow-md p-[14px] flex items-center ">
          <h1 className="font-bold text-lg">Top Navbar</h1>
        </header>
        <main>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center m-4">
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((item, index) => (
                <StarIcon key={index} className="w-6 h-6 text-yellow-500" />
              ))}
            </div>
            <p className="text-green-500">Amazing! </p>
            <p className="mt-2  text-orange-500 font-semibold text-xl">Ostad rating...</p>
          </div>
        </main>
      </div>
    </div>
  );
};
function NavItem({ isOpen, text }) {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-blue-100 cursor-pointer">
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 52 52"
        enable-background="new 0 0 52 52"
        xml:space="preserve"
      >
        <g>
          <path
            d="M49,27h-5v22c0,0.6-0.4,1-1,1H33c-0.6,0-1-0.4-1-1V32H20v17c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1V27H3
		c-0.4,0-0.8-0.2-0.9-0.6C1.9,26,2,25.6,2.3,25.3l23-23c0.4-0.4,1.1-0.4,1.4,0l23,23c0.3,0.3,0.3,0.7,0.2,1.1S49.4,27,49,27z"
          />
        </g>
      </svg>
      {isOpen && <span>{text}</span>}
    </div>
  );
}
export default Sidebarlayout;
