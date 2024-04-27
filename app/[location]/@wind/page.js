import NoWindFound from "@/components/NoWindFound";
import WindComponent from "@/components/WindComponent";
import { getLocationLatLong } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const result = await getLocationLatLong(location, latitude, longitude);
  if (result?.lat && result?.lon) {
    return <WindComponent lat={result?.lat} long={result?.lon} />;
  }
  return <NoWindFound location={location} />;
};

export default WindPage;
