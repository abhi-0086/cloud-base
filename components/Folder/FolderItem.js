import Image from "next/image";
import React from "react";

function FolderItem({ folder }) {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[130px] border-[1px] rounded-lg p-5 hover:scale-105 hover:shadow-md cursor-pointer">
      <Image src="/folder.png" width="40" height="40" alt="folder" />
      <h2 className="line-clamp-2 text-[12px] text-center">{folder.name}</h2>
    </div>
  );
}

export default FolderItem;
