import { useEffect, useRef } from "react";

export default function InputFied() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      type="text"
      name="searchInput"
      id=""
      className="w-full p-1 border border-indigo-400 rounded-md focus:outline-none focus:border-indigo-800"
    />
  );
}
