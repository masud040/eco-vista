"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const LocationSwitcher = () => {
  const [showList, setShowList] = useState(false);
  const [locations, setLocations] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    async function getAllLocations() {
      const res = await fetch("http://localhost:3000/api/location");
      const data = await res.json();
      setLocations(data);
    }

    getAllLocations();
  }, []);

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
        <div className="absolute left-16 md:left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2  ">
          <InputField />

          <ul
            role="list"
            className="divide-y overflow-y-scroll h-44 divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations?.map((location) => (
              <Link
                key={location.name}
                href={`/${location.name}?latitude=${location.latitude}&longitude=${location.longitude}`}
              >
                <li>{location.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
