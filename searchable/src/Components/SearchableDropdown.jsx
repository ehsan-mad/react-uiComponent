import React, { useEffect, useRef, useState } from "react";

const options = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Imbe",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli",
  "Vanilla",
  "Watermelon",
  "Ximenia",
  "Yellowfin Tuna",
  "Zucchini",
];
const searchabledropdown = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteroptions, setFilterOptions] = useState(options);
  const dropDownRef = useRef(null);
  const handleSearch = (event) => {
    const value= event.target.value;
    setSearch(value);
    setFilterOptions(
    options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    ));
    setIsOpen(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className=" relative w-64" ref={dropDownRef}>
      searchabledropdown
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        onFocus={() => setIsOpen(true)}
        className="rounded-xl focus:outline-none w-full px-4 py-2 border border-gray-200 focus:ring-2 focus:ring-amber-300 "
      />
      {isOpen && filteroptions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-gray-50 border border-gray-200  shadow-lg max-h-30 overflow-y-auto">
          {filteroptions.map((option, index) => (
            <li
              className="cursor-pointer hover:bg-blue-200 hover:text-white hover:text-2xl px-4 py-2 font-medium"
              onClick={() => {
                setSearch(option);
                setIsOpen(false);
              }}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default searchabledropdown;
