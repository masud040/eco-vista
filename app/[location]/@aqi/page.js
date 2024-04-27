import AQIComponent from "@/components/AQIComponent";
import NoAQIFound from "@/components/NoAQIFound";
import { getLocationLatLong } from "@/lib/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const result = await getLocationLatLong(location, latitude, longitude);
  if (result?.lat && result?.lon) {
    return <AQIComponent lat={result?.lat} long={result?.lon} />;
  }
  return <NoAQIFound location={location} />;
};

export default AQIPage;
