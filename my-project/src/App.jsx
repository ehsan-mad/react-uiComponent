import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10 space-y-6 bg-slate-100">
      {/* Accordion item */}
      <h1>Accordion</h1>
      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-4  flex justify-between items-center bg-slate-100">
          <span>Accordion item 1</span>
          <span>+</span>
        </button>
        <div className="px-4 py-1 bg-red-200">
          <p className="">Accordion item</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-4  flex justify-between items-center bg-slate-100">
          <span>Accordion item 1</span>
          <span>+</span>
        </button>
        <div className="px-4 py-1 bg-red-200">
          <p className="">Accordion item</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-4  flex justify-between items-center bg-slate-100">
          <span>Accordion item 1</span>
          <span>+</span>
        </button>
        <div className="px-4 py-1 bg-red-200">
          <p className="">Accordion item</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Avatar</h1>
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-200">
        {" "}
        {/*align items row and justify content center column centered */}A
      </div>

      <h1 className="text-2xl font-bold">Badge</h1>
      {/* Badge */}
      <div className="border shadow-lg px-4 py-4 flex gap-4 rounded-lg">
        <span className="inline-flex px-2 py-1 items-center rounded-lg bg-green-400 text-xs font-bold">
          Badge damn
        </span>
        <span className="inline-flex px-2 py-1 items-center rounded-lg ring-1 bg-zinc-100 text-xs font-bold gap-2">
          <div className="rounded-full px-1 py-1 bg-blue-400 "></div>Rounded dot
        </span>
        <span className="inline-flex px-4 py-2 items-center rounded-lg ring-1 bg-gradient-to-r from-blue-500 to-indigo-400 text-xs font-medium gap-2 right-1">
          Rounded Clickable
          <div className="rounded-full w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-300 text-black flex items-center justify-center font-medium cursor-pointer ">
            x
          </div>
        </span>
      </div>
      {/* Alert */}
      <h1 className="text-2xl font-bold">Alert</h1>
      <div className="border border-red-400 bg-red-100 text-red-700 px-4 py-2 rounded  justify-items-start items-start relative">
        <strong>Alert</strong>
        <span className="block">The danger Alert!</span>
        <span className="absolute top-0 right-0 bg-red-400 text-white px-2 py-1 rounded-bl cursor-pointer ">
          X
        </span>
      </div>

      <div className="border border-green-400 bg-green-100 text-green-700 px-4 py-2  justify-items-start items-start relative">
        <strong className="justify-items-start items-start">Alert</strong>
        <span className="block">The danger Alert!</span>
        <span className="top-0 right-0 bg-red-400 text-white px-2 py-1 rounded cursor-pointer absolute">
          X
        </span>
      </div>

      <h1 className="text-2xl font-bold">Modal</h1>
      {/* Modal */}
      <div className="hidden fixed inset-0 bg-black-300 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Modal</h1>
          <p>Modal content</p>
          <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold">circular percentage</h1>
      {/* Circular percentage */}
      <div className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
        
        <div
          className=" absolute   w-full border-[6px] h-full bg-blue-400  rounded-full  "
          style={{
            clipPath:
              'polygon(50% 50% ,100% 50%, 100%  ${100 - 80}%, 50% ${100 - 20}%) ',
          }}
        >
          <span className="absolute text-sm font-bold text-black">75%</span>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* Dashboard */}
      <div className=" rounded-lg shadow-lg  w-80 p-4 flex gap-4 items-start justify-between flex-col h-auto">
        <h2 className="text-lg font-bold">Total Result</h2>
        <p className="font-semibold">80,000</p>
      </div>

      <h1 className="text-2xl font-bold">table</h1>
      {/* Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Role</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">John Doe</td>
            <td className="px-4 py-2 border border-gray-300">Admin</td>
            <td className="px-4 py-2 border border-gray-300">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">John Doe</td>
            <td className="px-4 py-2 border border-gray-300">Admin</td>
            <td className="px-4 py-2 border border-gray-300">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">John Doe</td>
            <td className="px-4 py-2 border border-gray-300">Admin</td>
            <td className="px-4 py-2 border border-gray-300">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
