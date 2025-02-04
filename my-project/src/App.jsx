import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10 space-y-6">
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
            <div className="rounded-full px-1 py-1 bg-blue-400 "></div>Rounded
            dot
          </span>
          <span className="inline-flex px-4 py-2 items-center rounded-lg ring-1 bg-gradient-to-r from-blue-500 to-indigo-400 text-xs font-medium gap-2 right-1">
            Rounded Clickable
            <div className="rounded-full w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-300 text-black flex items-center justify-center font-medium cursor-pointer ">
              x
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
