import LocationComponent from "@/components/LocationComponent";
import NoLocationFound from "@/components/NoLocationFound";
import { getLocationLatLong } from "@/lib/location-info";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const result = await getLocationLatLong(location, latitude, longitude);

  if (result?.lat && result?.lon) {
    return <LocationComponent lat={result.lat} long={result.lon} />;
  }
  return <NoLocationFound location={location} />;
};

export default LocationPage;
