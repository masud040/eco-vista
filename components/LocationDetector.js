"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        params.set("latitude", latitude);
        params.set("longitude", longitude);
        setLoading(false);

        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      {loading && (
        <>
          <Image
            src="/images/network.gif"
            width={400}
            height={400}
            alt="loading..."
            className="my-4 border rounded-md "
          />
          <p className="text-3xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
