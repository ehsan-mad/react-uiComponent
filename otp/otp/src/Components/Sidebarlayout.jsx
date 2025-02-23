import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Sidebarlayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div
        className={`bg-white shadow-lg transition-all duration-300 min-h-screen  ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`text-xl font-bold text-gray-700 transition-opacity ${isOpen ? "opacity-100":"opacity-0 hidden"} `}>Dashboard</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? 
              <XMarkIcon className="h-6 w-6" />
             : 
              <Bars3Icon className="h-6 w-6" />
            }
          </button>
        </div>
          <nav className="mt-4">
            <NavItem isOpen={isOpen} text="Home"/>
            <NavItem isOpen={isOpen} text="About"/>
            <NavItem isOpen={isOpen} text="Contact"/>
          </nav>
      </div>
          <div className="flex p-6">
            <h2>Main content</h2>
            <p>This is text area</p>
          </div>
    </div>
  );
};
function NavItem({isOpen,text}){
return(
    <div className="flex items-center space-x-3 p-3 hover:bg-blue-100 cursor-pointer">
        {isOpen && <span>{text}</span>}
    </div>
)
}
export default Sidebarlayout;
