import NoTemperatureFound from "@/components/NoTemperatureFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getLocationLatLong } from "@/lib/location-info";

const Temparature = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const result = await getLocationLatLong(location, latitude, longitude);
  if (result?.lat && result?.lon) {
    return <TemperatureComponent lat={result?.lat} long={result?.lon} />;
  }
  return <NoTemperatureFound />;
};

export default Temparature;
