import menu from "@/data/menu";
import Image from "next/image";
import React, { useState } from "react";
import CreateFolderModal from "./Folder/CreateFolderModal";

function SideNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-5 w-[220px] h-screen bg-white sticky top-0 z-10 shadow-lg shadow-blue-300">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={150} height={100} />
      </div>
      <button className="w-full flex gap-2 justify-center items-center text-[14px] bg-blue-500 px-3 py-2 rounded-md text-white hover:scale-105 transition-all mt-6">
        Add New File
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        className="w-full flex gap-2 justify-center items-center text-[14px] bg-sky-400 px-3 py-2 rounded-md text-white hover:scale-105 transition-all mt-2"
        onClick={() => window.my_modal_3.showModal()}
      >
        New Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div>
        {menu.list.map((item, index) => (
          <h2
            onClick={() => setActiveIndex(index)}
            key={item.id}
            className={`flex gap-2 items-center p-3 mt-3 text-gray-500 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white ${
              activeIndex == index ? "bg-blue-400 text-white" : null
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}
          </h2>
        ))}
      </div>

      {/* <button className="btn">open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <CreateFolderModal />
      </dialog>
    </div>
  );
}

export default SideNavbar;
