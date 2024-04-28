"use client";
import Image from "next/image";
import { useState } from "react";
import LocationList from "./LocationList";

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
      {showList && <LocationList />}
    </div>
  );
};

export default LocationSwitcher;
