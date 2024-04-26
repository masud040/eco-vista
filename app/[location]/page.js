import LocationComponent from "@/components/LocationComponent";

const LocationPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationComponent lat={latitude} long={longitude} />;
};

export default LocationPage;
