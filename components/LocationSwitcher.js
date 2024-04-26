"use client";
import Image from "next/image";
import { useState } from "react";

const LocationSwitcher = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setShowList((s) => !s)}>
        <Image
          className="size-9"
          src="/icons/link.svg"
          alt="link icon"
          width={18}
          height={18}
        />
      </button>
      {showList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            <li>Kolkata</li>
            <li>Dhaka</li>
            <li>London</li>
            <li>Amsterdam</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
