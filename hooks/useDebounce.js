import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay) {
  let timeoutId = useRef();
  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);
  const debounceCallback = (...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceCallback;
}
