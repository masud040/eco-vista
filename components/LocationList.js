import useDebounce from "@/hooks/useDebounce";
import getMatchLocation from "@/lib/utils/getMatchLocation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LocationList() {
  const inputRef = useRef(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getAllLocations() {
      const res = await fetch("http://localhost:3000/api/location");
      const data = await res.json();
      setLocations(data);
    }

    getAllLocations();
    inputRef.current?.focus();
  }, []);

  const querySearch = async (terms) => {
    const found = await getMatchLocation(terms);
    setLocations(found);
  };
  const doSearch = useDebounce((terms) => {
    querySearch(terms);
  }, 1000);
  return (
    <div className="absolute left-16 md:left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2  ">
      <input
        ref={inputRef}
        type="text"
        name="searchInput"
        id=""
        onChange={(e) => doSearch(e.target.value)}
        className="w-full p-1 border border-indigo-400 rounded-md focus:outline-none focus:border-indigo-800"
      />
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
  );
}
