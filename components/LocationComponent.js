import { getLocationData } from "@/lib/location-info";
import LocationSwitcher from "./LocationSwitcher";

const LocationComponent = async ({ lat, long }) => {
  const location = await getLocationData(lat, long);

  return (
    <div className="flex flex-col justify-end col-span-12 lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {location?.continent}
          </h2>
          <LocationSwitcher />
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {location?.countryName} | {location?.city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
