import { getLocationData } from "@/lib/location-info";

const Weather = async ({ searchParams: { latitude, longitude } }) => {
  const location = await getLocationData(latitude, longitude);
  console.log(location);
  return <div>This is weather page</div>;
};

export default Weather;
